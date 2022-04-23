import React from 'react';
import { CCol, CRow, CFormSelect, CInputGroup, CInputGroupText, CFormInput } from '@coreui/react';
const Filter = (props) => {
    return (
        <>
            <CRow xs={{ gutterX: 2 }}>
                <CCol>
                    <h4>Danh sách học sinh</h4>
                </CCol>
                <CCol>
                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1" className="btn-outline-secondary">
                            Năm học
                        </CInputGroupText>
                        <CFormSelect
                            aria-label="Default select example"
                            options={[
                                'Open this select menu',
                                { label: 'One', value: '1' },
                                { label: 'Two', value: '2' },
                                { label: 'Three', value: '3', disabled: true },
                            ]}
                        />
                    </CInputGroup>
                </CCol>
                <CCol>
                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Độ tuổi</CInputGroupText>
                        <CFormSelect
                            aria-label="Default select example"
                            options={[
                                'Open this select menu',
                                { label: 'One', value: '1' },
                                { label: 'Two', value: '2' },
                                { label: 'Three', value: '3', disabled: true },
                            ]}
                        />
                    </CInputGroup>
                </CCol>
                <CCol>
                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Trạng thái</CInputGroupText>
                        <CFormSelect
                            aria-label="Default select example"
                            options={[
                                'Open this select menu',
                                { label: 'One', value: '1' },
                                { label: 'Two', value: '2' },
                                { label: 'Three', value: '3', disabled: true },
                            ]}
                        />
                    </CInputGroup>
                </CCol>
                <CCol>
                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">@</CInputGroupText>
                        <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </CInputGroup>
                </CCol>
            </CRow>
        </>
    );
};

export default Filter;
