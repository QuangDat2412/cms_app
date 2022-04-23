import React from 'react';
import { CTableRow, CTableDataCell } from '@coreui/react';
import { Link } from 'react-router-dom';
const Item = (props) => {
    const { program, idx, openMoDal } = props;
    const goProgramDetail = () => {};
    return (
        <>
            <CTableRow>
                <CTableDataCell>{program.code}</CTableDataCell>
                <CTableDataCell>{program.name}</CTableDataCell>
                <CTableDataCell>{program.lessonNumber}</CTableDataCell>
                <CTableDataCell>
                    <span
                        style={{
                            color: '#4c9a2b',
                            backgroundColor: '#aef58f80',
                            padding: '3px',
                            borderRadius: '5px',
                        }}
                    >
                        {program.status}
                    </span>
                </CTableDataCell>
                <CTableDataCell className="d-flex justify-content-between" style={{ width: '70%' }}>
                    <Link to={`${program.code}`}>Xem chi tiết</Link>
                    <a href="" onClick={openMoDal}>
                        Chỉnh sửa
                    </a>
                </CTableDataCell>
            </CTableRow>
        </>
    );
};

export default Item;
