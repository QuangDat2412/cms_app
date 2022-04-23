import React from 'react';
import Item from './Item';
import List from './List';
import Filter from './Filter';
const Program = () => {
    const programs = [
        {
            code: 'N5566',
            name: 'Tiếng Nhật 1',
            lessonNumber: 3,
            status: 'Đang hoạt động',
        },
        {
            code: 'N5566',
            name: 'Tiếng Nhật 1',
            lessonNumber: 3,
            status: 'Đang hoạt động',
        },
        {
            code: 'N5566',
            name: 'Tiếng Nhật 1',
            lessonNumber: 3,
            status: 'Đang hoạt động',
        },
        {
            code: 'N5566',
            name: 'Tiếng Nhật 1',
            lessonNumber: 3,
            status: 'Đang hoạt động',
        },
        {
            code: 'N5566',
            name: 'Tiếng Nhật 1',
            lessonNumber: 3,
            status: 'Đang hoạt động',
        },
        {
            code: 'N5566',
            name: 'Tiếng Nhật 1',
            lessonNumber: 3,
            status: 'Đang hoạt động',
        },
        {
            code: 'N5566',
            name: 'Tiếng Nhật 1',
            lessonNumber: 3,
            status: 'Đang hoạt động',
        },
    ];
    const openMoDal = (e) => {
        e.preventDefault();
    };
    const showData = (e) => {
        return (
            <>
                {programs.map((p, i) => (
                    <Item program={p} idx={i} openMoDal={openMoDal} key={i} />
                ))}
            </>
        );
    };
    return (
        <>
            <Filter />
            <List>{showData()}</List>
        </>
    );
};

export default Program;
