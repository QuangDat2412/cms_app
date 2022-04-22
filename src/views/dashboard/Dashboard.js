import React from 'react';
import {
    CCol,
    CRow,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CTable,
    CTableHead,
    CTableRow,
    CTableBody,
    CTableHeaderCell,
    CTableDataCell,
} from '@coreui/react';
const Dashboard = () => {
    return (
        <>
            <CRow xs={{ gutterX: 5 }}>
                <CCol>One of three columns</CCol>
                <CCol>
                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">@</CInputGroupText>
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
            <CRow>
                <CTable>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </CRow>
        </>
    );
};

export default Dashboard;
