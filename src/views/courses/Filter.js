import React from 'react';
import { CCol, CRow, CFormSelect, CInputGroup, CInputGroupText, CFormInput, CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus } from '@coreui/icons';

const Filter = (props) => {
    const { openMoDalAdd } = props;
    return (
        <>
            <CRow xs={{ gutterX: 2, gutterY: 2 }}>
                <CCol lg={6}>
                    <CRow>
                        <CCol lg={4} xs={6}>
                            <h4>Khóa học</h4>
                        </CCol>
                        <CCol lg={8} xs={6}>
                            <CButton type="button" color="secondary" variant="outline" id="button-addon1" onClick={openMoDalAdd}>
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
                            options={[
                                { label: 'Đang hoạt động', value: '1' },
                                { label: 'Ngừng hoạt động', value: '0' },
                            ]}
                        />
                    </CInputGroup>
                </CCol>
                <CCol lg={3}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Tìm kiếm</CInputGroupText>
                        <CFormInput placeholder="Tìm kiếm khóa học" aria-label="Tìm kiếm khóa học" aria-describedby="basic-addon1" />
                    </CInputGroup>
                </CCol>
            </CRow>
        </>
    );
};

export default Filter;
