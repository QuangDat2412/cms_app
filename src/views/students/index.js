import React from 'react';
import Item from './Item';
import List from './List';
import Filter from './Filter';
const Students = () => {
    const students = [
        {
            student: {
                code: 'HB141220218',
                fullName: 'Trần Ngọc Lâm',
                gender: 1,
                dob: '2007-01-01 00:00:00.000000',
                status: 1,
                avatar: '',
                ethnicName: 'Kinh',
                address: 'Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
                notes: '',
            },
            parent: {
                fullName: 'Nguyễn Thị Uyên',
                dob: '1990-01-01 00:00:00.000000',
                phoneNumber: '0908260186',
                work: '',
                note: 'Không có hoàn cảnh đặc biệt',
            },
            class: {
                yearName: '2021-2022',
                startDate: 1630820190,
                gradeName: 'Mẫu giáo nhỡ 3-4 tuổi',
                name: 'Lớp chích bông 1',
                bonus: 5,
            },
        },
        {
            student: {
                code: 'HB141220218',
                fullName: 'Trần Ngọc Lâm',
                gender: 1,
                dob: '2007-01-01 00:00:00.000000',
                status: 1,
                avatar: '',
                ethnicName: 'Kinh',
                address: 'Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
                notes: '',
            },
            parent: {
                fullName: 'Nguyễn Thị Uyên',
                dob: '1990-01-01 00:00:00.000000',
                phoneNumber: '0908260186',
                work: '',
                note: 'Không có hoàn cảnh đặc biệt',
            },
            class: {
                yearName: '2021-2022',
                startDate: 1630820190,
                gradeName: 'Mẫu giáo nhỡ 3-4 tuổi',
                name: 'Lớp chích bông 1',
                bonus: 5,
            },
        },
        {
            student: {
                code: 'HB141220218',
                fullName: 'Trần Ngọc Lâm',
                gender: 1,
                dob: '2007-01-01 00:00:00.000000',
                status: 1,
                avatar: '',
                ethnicName: 'Kinh',
                address: 'Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
                notes: '',
            },
            parent: {
                fullName: 'Nguyễn Thị Uyên',
                dob: '1990-01-01 00:00:00.000000',
                phoneNumber: '0908260186',
                work: '',
                note: 'Không có hoàn cảnh đặc biệt',
            },
            class: {
                yearName: '2021-2022',
                startDate: 1630820190,
                gradeName: 'Mẫu giáo nhỡ 3-4 tuổi',
                name: 'Lớp chích bông 1',
                bonus: 5,
            },
        },
        {
            student: {
                code: 'HB141220218',
                fullName: 'Trần Ngọc Lâm',
                gender: 1,
                dob: '2007-01-01 00:00:00.000000',
                status: 1,
                avatar: '',
                ethnicName: 'Kinh',
                address: 'Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
                notes: '',
            },
            parent: {
                fullName: 'Nguyễn Thị Uyên',
                dob: '1990-01-01 00:00:00.000000',
                phoneNumber: '0908260186',
                work: '',
                note: 'Không có hoàn cảnh đặc biệt',
            },
            class: {
                yearName: '2021-2022',
                startDate: 1630820190,
                gradeName: 'Mẫu giáo nhỡ 3-4 tuổi',
                name: 'Lớp chích bông 1',
                bonus: 5,
            },
        },
        {
            student: {
                code: 'HB141220218',
                fullName: 'Trần Ngọc Lâm',
                gender: 1,
                dob: '2007-01-01 00:00:00.000000',
                status: 1,
                avatar: '',
                ethnicName: 'Kinh',
                address: 'Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
                notes: '',
            },
            parent: {
                fullName: 'Nguyễn Thị Uyên',
                dob: '1990-01-01 00:00:00.000000',
                phoneNumber: '0908260186',
                work: '',
                note: 'Không có hoàn cảnh đặc biệt',
            },
            class: {
                yearName: '2021-2022',
                startDate: 1630820190,
                gradeName: 'Mẫu giáo nhỡ 3-4 tuổi',
                name: 'Lớp chích bông 1',
                bonus: 5,
            },
        },
        {
            student: {
                code: 'HB141220218',
                fullName: 'Trần Ngọc Lâm',
                gender: 1,
                dob: '2007-01-01 00:00:00.000000',
                status: 1,
                avatar: '',
                ethnicName: 'Kinh',
                address: 'Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
                notes: '',
            },
            parent: {
                fullName: 'Nguyễn Thị Uyên',
                dob: '1990-01-01 00:00:00.000000',
                phoneNumber: '0908260186',
                work: '',
                note: 'Không có hoàn cảnh đặc biệt',
            },
            class: {
                yearName: '2021-2022',
                startDate: 1630820190,
                gradeName: 'Mẫu giáo nhỡ 3-4 tuổi',
                name: 'Lớp chích bông 1',
                bonus: 5,
            },
        },
        {
            student: {
                code: 'HB141220218',
                fullName: 'Trần Ngọc Lâm',
                gender: 1,
                dob: '2007-01-01 00:00:00.000000',
                status: 1,
                avatar: '',
                ethnicName: 'Kinh',
                address: 'Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
                notes: '',
            },
            parent: {
                fullName: 'Nguyễn Thị Uyên',
                dob: '1990-01-01 00:00:00.000000',
                phoneNumber: '0908260186',
                work: '',
                note: 'Không có hoàn cảnh đặc biệt',
            },
            class: {
                yearName: '2021-2022',
                startDate: 1630820190,
                gradeName: 'Mẫu giáo nhỡ 3-4 tuổi',
                name: 'Lớp chích bông 1',
                bonus: 5,
            },
        },
        {
            student: {
                code: 'HB141220218',
                fullName: 'Trần Ngọc Lâm',
                gender: 1,
                dob: '2007-01-01 00:00:00.000000',
                status: 1,
                avatar: '',
                ethnicName: 'Kinh',
                address: 'Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
                notes: '',
            },
            parent: {
                fullName: 'Nguyễn Thị Uyên',
                dob: '1990-01-01 00:00:00.000000',
                phoneNumber: '0908260186',
                work: '',
                note: 'Không có hoàn cảnh đặc biệt',
            },
            class: {
                yearName: '2021-2022',
                startDate: 1630820190,
                gradeName: 'Mẫu giáo nhỡ 3-4 tuổi',
                name: 'Lớp chích bông 1',
                bonus: 5,
            },
        },
    ];
    const openMoDal = (e) => {
        e.preventDefault();
    };
    const showData = (e) => {
        return (
            <>
                {students.map((student, i) => (
                    <Item student={student} idx={i} openMoDal={openMoDal} key={i} />
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

export default Students;
