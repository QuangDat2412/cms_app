import React, { useState, useCallback, useEffect } from 'react';
import Item from './Item';
import List from './List';
import Filter from './Filter';
import {
    CFormLabel,
    CForm,
    CModalTitle,
    CModalHeader,
    CModalBody,
    CModal,
    CButton,
    CFormInput,
    CRow,
    CCol,
    CModalFooter,
    CFormSelect,
    CFormFeedback,
} from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { courseActions, courseSelector } from 'src/redux/course/course.slice';

const Courses = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(courseActions.getCourse(inputs));
    }, []);
    const courses = useSelector(courseSelector.courses);
    const [visible, setVisible] = useState(false);
    const [inputs, setInputs] = useState({ name: '', code: 'ABC', status: 1, type: 0 });
    const [validated, setValidated] = useState(false);
    const [actionType, setActionType] = useState('');
    const handleChange = useCallback((e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);

    const openMoDalAdd = (e) => {
        e.preventDefault();
        setVisible(true);
        setActionType('add');
    };
    const showData = (e) => {
        return (
            <>
                {courses.map((p, i) => (
                    <Item course={p} idx={i} key={i} />
                ))}
            </>
        );
    };
    const saveCourse = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            dispatch(courseActions.saveCourse(inputs));
        }
        setValidated(true);
    };
    return (
        <>
            <Filter openMoDalAdd={openMoDalAdd} />
            <List>{showData()}</List>
            <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>{actionType === 'add' ? 'Thêm mới khóa học' : 'Chỉnh sửa khóa học'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={saveCourse}>
                        <CRow xs={{ gutter: 3 }}>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Tên khóa học</CFormLabel>
                                <CFormInput type="text" label="Tên khóa học" required name="name" onChange={handleChange} value={inputs.name} />
                                <CFormFeedback invalid>Vui lòng nhập tên khóa học.</CFormFeedback>
                            </CCol>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Code</CFormLabel>
                                <CFormInput
                                    type="text"
                                    label="Code"
                                    required
                                    name="code"
                                    disabled={true}
                                    onChange={handleChange}
                                    value={inputs.code}
                                />
                            </CCol>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Trạng thái</CFormLabel>
                                <CFormSelect required onChange={handleChange} name="status" value={inputs.status}>
                                    <option value="1">Đang hoạt động</option>
                                    <option value="0">Ngừng hoạt động</option>
                                </CFormSelect>
                            </CCol>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Loại khóa học</CFormLabel>
                                <CFormSelect required name="type" onChange={handleChange} value={inputs.type}>
                                    <option value="">Chọn khóa học</option>
                                    <option value="1">Cơ bản</option>
                                    <option value="0">Nâng cao</option>
                                </CFormSelect>
                                <CFormFeedback invalid>Vui lòng chọn loại khóa học.</CFormFeedback>
                            </CCol>
                        </CRow>

                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                Đóng
                            </CButton>
                            <CButton color="success" type="submit">
                                Lưu lại
                            </CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    );
};

export default Courses;
