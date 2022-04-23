import React from 'react';
import { CTableRow, CTableDataCell } from '@coreui/react';
const Item = (props) => {
    const { student, idx, openMoDal } = props;
    return (
        <>
            <CTableRow>
                <CTableDataCell>{idx + 1}</CTableDataCell>
                <CTableDataCell>{student.student.code}</CTableDataCell>
                <CTableDataCell>{student.student.fullName}</CTableDataCell>
                <CTableDataCell>{student.student.gender === 1 ? 'Nam' : 'Nữ'}</CTableDataCell>
                <CTableDataCell>{student.student.dob}</CTableDataCell>
                <CTableDataCell>{student.class.name}</CTableDataCell>
                <CTableDataCell>{student.class.startDate}</CTableDataCell>
                <CTableDataCell>{student.parent.phoneNumber}</CTableDataCell>
                <CTableDataCell>
                    <span
                        style={{
                            color: '#4c9a2b',
                            backgroundColor: '#aef58f80',
                            padding: '3px',
                            borderRadius: '5px',
                        }}
                    >
                        {student.student.status === 1 ? 'Đang hoạt động' : 'Không hoạt dộng'}
                    </span>
                </CTableDataCell>
                <CTableDataCell>
                    <a href="" onClick={openMoDal}>
                        Xem chi tiết
                    </a>
                </CTableDataCell>
            </CTableRow>
        </>
    );
};

export default Item;
