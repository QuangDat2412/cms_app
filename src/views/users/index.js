import React, { useEffect, useState, useCallback } from 'react';
import Item from './Item';
import List from './List';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userSelector } from 'src/redux/user/user.slice';
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
const Students = () => {
    const dispatch = useDispatch();
    const userForm = { fullName: '', isAdmin: true, email: '', password: 'abc123', avatar: '', phoneNumber: '', status: 1 };
    const filterForm = { name: '', isAdmin: true, status: '' };
    const [visible, setVisible] = useState(false);
    const [inputs, setInputs] = useState(userForm);
    const [filter, setFilter] = useState(filterForm);
    const [validated, setValidated] = useState(false);
    const [actionType, setActionType] = useState('');
    useEffect(() => {
        dispatch(userActions.getUser(filter));
    }, [filter]);
    const users = useSelector(userSelector.users);

    const openMoDalAdd = (user, type) => {
        if (type === 'update') {
            const _user = { ...user };
            setInputs(_user);
        } else if (type === 'add') {
            setInputs(userForm);
        }
        setActionType(type);
        setVisible(true);
    };
    const showData = (e) => {
        return (
            <>
                {users.map((user, i) => (
                    <Item user={user} openMoDalAdd={openMoDalAdd} idx={i} key={i} />
                ))}
            </>
        );
    };
    const handleChangeFilter = useCallback((e) => {
        setFilter((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);
    const handleChange = useCallback((e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }, []);
    const saveUser = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            dispatch(userActions.saveUser({ inputs, type: actionType }));
        }
        setValidated(true);
    };
    const closeModal = () => {
        setValidated(false);
        setVisible(false);
    };
    return (
        <>
            <Filter openMoDalAdd={openMoDalAdd} handleChangeFilter={handleChangeFilter} />
            <List>{showData()}</List>
            <CModal visible={visible} onClose={closeModal} size="lg">
                <CModalHeader onClose={closeModal}>
                    <CModalTitle>{actionType === 'add' ? 'Thêm mới người dùng' : 'Chỉnh sửa thông tin:'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={saveUser}>
                        <CRow xs={{ gutter: 3 }}>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Tên người dùng</CFormLabel>
                                <CFormInput
                                    type="text"
                                    label="Tên người dùng"
                                    required
                                    name="fullName"
                                    onChange={handleChange}
                                    value={inputs.fullName}
                                />
                                <CFormFeedback invalid>Vui lòng nhập tên người dùng.</CFormFeedback>
                            </CCol>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Email</CFormLabel>
                                <CFormInput type="email" label="Email" required name="email" onChange={handleChange} value={inputs.email} />
                                <CFormFeedback invalid>Vui lòng nhập Email.</CFormFeedback>
                            </CCol>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Số điện thoại</CFormLabel>
                                <CFormInput
                                    type="text"
                                    label="Số điện thoại"
                                    required
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    value={inputs.phoneNumber}
                                />
                                <CFormFeedback invalid>Vui lòng nhập số điện thoại.</CFormFeedback>
                            </CCol>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Trạng thái</CFormLabel>
                                <CFormSelect required onChange={handleChange} name="status" value={inputs.status}>
                                    <option value="1">Đang hoạt động</option>
                                    <option value="0">Ngừng hoạt động</option>
                                </CFormSelect>
                            </CCol>
                            <CCol lg="6">
                                <CFormLabel htmlFor="validationServerUsername">Chức vụ</CFormLabel>
                                <CFormSelect required onChange={handleChange} name="isAdmin" value={inputs.isAdmin}>
                                    <option value="true">Admin</option>
                                    <option value="false">Người dùng</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>

                        <CModalFooter>
                            <CButton color="secondary" onClick={closeModal}>
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

export default Students;
