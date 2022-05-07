import React from 'react';
import { CTableRow, CTableDataCell } from '@coreui/react';
const Item = (props) => {
    const { user, idx, openMoDalAdd } = props;
    const open = (event) => {
        event.preventDefault();
        openMoDalAdd({}, 'update');
    };
    return (
        <>
            <CTableRow>
                <CTableDataCell>{idx + 1}</CTableDataCell>
                <CTableDataCell>{user.fullName}</CTableDataCell>
                <CTableDataCell>{user.isAdmin ? 'Admin' : 'Người dùng'}</CTableDataCell>
                <CTableDataCell>{user.email}</CTableDataCell>
                <CTableDataCell>{user.phoneNumber}</CTableDataCell>
                <CTableDataCell>
                    <div
                        style={{
                            color: '#fff',
                            backgroundColor: `${user.status === 1 ? '#2eb85c' : 'red'}`,
                            padding: '3px',
                            borderRadius: '5px',
                            width: '140px',
                            textAlign: 'center',
                        }}
                    >
                        {user.status === 1 ? 'Đang hoạt động' : 'Ngừng hoạt dộng'}
                    </div>
                </CTableDataCell>
                <CTableDataCell>
                    <a onClick={open} href="">
                        Chỉnh sửa
                    </a>
                </CTableDataCell>
            </CTableRow>
        </>
    );
};

export default Item;
