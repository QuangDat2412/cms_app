import React from 'react';
import { CRow, CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react';
const List = (props) => {
    return (
        <>
            <CRow>
                <CTable>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell>Mã khóa học</CTableHeaderCell>
                            <CTableHeaderCell>Tên khóa học</CTableHeaderCell>
                            <CTableHeaderCell>Loại khóa học</CTableHeaderCell>
                            <CTableHeaderCell>Trạng thái</CTableHeaderCell>
                            <CTableHeaderCell>Hành động</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>{props.children}</CTableBody>
                </CTable>
            </CRow>
        </>
    );
};

export default List;
