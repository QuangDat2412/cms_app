import React from 'react';

const Student = React.lazy(() => import('./views/students'));
const Program = React.lazy(() => import('./views/programs'));
const NewProgram = React.lazy(() => import('./views/programs/newProgram'));
const ProgramDetails = React.lazy(() => import('./views/programs/programDetail'));

const routes = [
    { path: '/', exact: true, name: 'Trang chủ' },
    { path: '/students', name: 'Danh sách học sinh', element: Student },
    { path: '/programs/new', name: 'Thêm mới chương trình', element: NewProgram },
    { path: '/programs/:code', name: 'Chi tiết chương trình', element: ProgramDetails },
    { path: '/programs', name: 'Chương trình học', element: Program },
];

export default routes;
