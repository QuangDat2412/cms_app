import React from 'react';
import { CRow, CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react';
const List = (props) => {
    return (
        <>
            <CRow>
                <CTable>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell>STT</CTableHeaderCell>
                            <CTableHeaderCell>Họ tên</CTableHeaderCell>
                            <CTableHeaderCell>Chức vụ</CTableHeaderCell>
                            <CTableHeaderCell>Email</CTableHeaderCell>
                            <CTableHeaderCell>Điện thoại</CTableHeaderCell>
                            <CTableHeaderCell>Trạng thái</CTableHeaderCell>
                            <CTableHeaderCell></CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>{props.children}</CTableBody>
                </CTable>
            </CRow>
        </>
    );
};

export default List;
