import React from 'react';
import CIcon from '@coreui/icons-react';
import { CCol, CRow, CFormSelect, CInputGroup, CInputGroupText, CFormInput, CButton } from '@coreui/react';
import { cilPlus, cilSearch } from '@coreui/icons';
const Filter = (props) => {
    const { openMoDalAdd, handleChangeFilter } = props;
    const open = (event) => {
        event.preventDefault();
        openMoDalAdd({}, 'add');
    };
    return (
        <>
            <CRow xs={{ gutterX: 2 }}>
                <CCol lg="6">
                    <CRow>
                        <CCol lg={5}>
                            <h4>Danh sách người dùng</h4>
                        </CCol>
                        <CCol lg={5}>
                            <CButton type="button" color="secondary" variant="outline" id="button-addon1" onClick={open}>
                                <CIcon icon={cilPlus} /> Thêm mới
                            </CButton>
                        </CCol>
                    </CRow>
                </CCol>
                <CCol lg={3}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Trạng thái</CInputGroupText>
                        <CFormSelect
                            aria-label="Default select example"
                            onChange={handleChangeFilter}
                            name="status"
                            options={[
                                { label: 'Tất cả', value: '' },
                                { label: 'Đang hoạt động', value: '1' },
                                { label: 'Ngừng hoạt động', value: '0' },
                            ]}
                        />
                    </CInputGroup>
                </CCol>
                <CCol lg="3">
                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                            <CIcon icon={cilSearch} size="xl" />
                        </CInputGroupText>
                        <CFormInput placeholder="Tìm kiếm theo tên người dùng" onChange={handleChangeFilter} name="name" />
                    </CInputGroup>
                </CCol>
            </CRow>
        </>
    );
};

export default Filter;
