import React from 'react';
import { CTableRow, CTableDataCell } from '@coreui/react';
import { Link } from 'react-router-dom';
const Item = (props) => {
    const { course, idx, openMoDal } = props;
    const goCourseDetail = () => {};
    return (
        <>
            <CTableRow>
                <CTableDataCell>{course.code}</CTableDataCell>
                <CTableDataCell>{course.name}</CTableDataCell>
                <CTableDataCell>{course.type}</CTableDataCell>
                <CTableDataCell>
                    <div
                        style={{
                            color: '#fff',
                            backgroundColor: `${course.status === 1 ? '#2eb85c' : 'red'}`,
                            padding: '3px',
                            borderRadius: '5px',
                            width: '140px',
                            textAlign: 'center',
                        }}
                    >
                        {course.status === 1 ? 'Đang hoạt động' : 'Ngừng hoạt dộng'}
                    </div>
                </CTableDataCell>
                <CTableDataCell className="d-flex justify-content-between" style={{ width: '70%' }}>
                    <Link to={`${course.code}`}>Xem chi tiết</Link>
                    <a href="javascript:;" onClick={openMoDal}>
                        Chỉnh sửa
                    </a>
                </CTableDataCell>
            </CTableRow>
        </>
    );
};

export default Item;
