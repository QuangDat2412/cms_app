import React, { useState, useCallback, useEffect } from 'react';
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
    CCol,
    CModalFooter,
    CFormSelect,
    CFormFeedback,
} from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { courseActions, courseSelector } from 'src/redux/course/course.slice';
import { OthersSelector } from 'src/redux/others/slice';
import TableCustom from 'src/components/table';
import { useNavigate } from 'react-router-dom';
import UploadImage from 'src/components/uploadImage';
const Courses = () => {
    let navigate = useNavigate();
    const courseForm = { name: '', code: '123', status: 1, type: '', image: '' };
    const [inputs, setInputs] = useState({ ...courseForm });
    const filterForm = { name: '', status: 0 };
    const [filter, setFilter] = useState(filterForm);
    const options = useSelector(OthersSelector.options);
    const typeCourse = options?.typeCourse || [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(courseActions.getCourse(filter));
    }, [filter, dispatch]);
    const courses = useSelector(courseSelector.courses);
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [actionType, setActionType] = useState('');
    const handleChange = useCallback((e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);

    const makeCode = (n) => {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        for (var i = 0; i < n; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };

    const openMoDalAdd = (course, type) => {
        if (type === 'update') {
            const _course = { ...course };
            setInputs(_course);
        } else if (type === 'add') {
            setInputs({ ...courseForm, code: makeCode(6) });
        }
        setActionType(type);
        setVisible(true);
    };
    const data = {
        data: courses.map((c, i) => {
            return { ...c, typeName: c.typeObj.name };
        }),
        actions: [
            {
                key: 'update',
                value: 'Chỉnh sửa',
                openMoDalAdd: function (user, type) {
                    return openMoDalAdd(user, type);
                },
            },
            {
                key: 'detail',
                value: 'Nội dung khóa học',
                openMoDalAdd: function (data) {
                    navigate('/courses/' + data.code, { replace: true });
                },
            },
        ],
        header: [
            {
                key: 'code',
                value: 'Mã khóa học',
            },
            {
                key: 'name',
                value: 'Tên khóa học',
            },
            {
                key: 'typeName',
                value: 'Loại khóa học',
            },
            {
                key: 'status',
                value: 'Trạng thái',
                type: 'status',
            },
        ],
    };
    const handleChangeFilter = useCallback((e) => {
        setFilter((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);
    const saveCourse = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            Promise.resolve(dispatch(courseActions.saveCourse(inputs)))
                .then((data) => {
                    closeModal();
                    dispatch(courseActions.getCourse(filter));
                })
                .catch(() => {});
        }
        setValidated(true);
    };
    const closeModal = () => {
        setValidated(false);
        setVisible(false);
    };
    const setUrl = (e) => {
        setInputs((prev) => {
            return { ...prev, image: e };
        });
    };
    return (
        <>
            <Filter openMoDalAdd={openMoDalAdd} handleChangeFilter={handleChangeFilter} />
            <TableCustom datas={data} />
            <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>{actionType === 'add' ? 'Thêm mới khóa học' : 'Chỉnh sửa khóa học'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={saveCourse}>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Tên khóa học</CFormLabel>
                            <CFormInput type="text" label="Tên khóa học" required name="name" onChange={handleChange} value={inputs.name} />
                            <CFormFeedback invalid>Vui lòng nhập tên khóa học.</CFormFeedback>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Code</CFormLabel>
                            <CFormInput type="text" label="Code" required name="code" disabled={true} value={inputs.code} />
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Trạng thái</CFormLabel>
                            <CFormSelect required onChange={handleChange} name="status" value={inputs.status}>
                                <option value="1">Đang hoạt động</option>
                                <option value="2">Ngừng hoạt động</option>
                            </CFormSelect>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Loại khóa học</CFormLabel>
                            <CFormSelect required name="type" onChange={handleChange} value={inputs.type}>
                                <option value="">Chọn khóa học</option>
                                {typeCourse.map((t) => {
                                    return (
                                        <option value={t._id} key={t._id}>
                                            {t.name}
                                        </option>
                                    );
                                })}
                            </CFormSelect>
                            <CFormFeedback invalid>Vui lòng chọn loại khóa học.</CFormFeedback>
                        </CCol>
                        <CCol lg="6">
                            <CFormLabel htmlFor="validationServerUsername">Ảnh nền</CFormLabel>
                            <UploadImage type="thumbnail" setUrl={setUrl} url={inputs.image} />
                        </CCol>
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
