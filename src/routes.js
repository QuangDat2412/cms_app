import React from 'react';

const User = React.lazy(() => import('./views/users'));
const Course = React.lazy(() => import('./views/courses'));
const NewCourse = React.lazy(() => import('./views/courses/newCourse'));
const CourseDetails = React.lazy(() => import('./views/courses/courseDetail'));

const routes = [
    { path: '/', exact: true, name: 'Trang chủ' },
    { path: '/students', name: 'Danh sách người dùng', element: User },
    { path: '/courses/new', name: 'Thêm mới khóa', element: NewCourse },
    { path: '/courses/:code', name: 'Chi tiết khóa', element: CourseDetails },
    { path: '/courses', name: 'Khóa học', element: Course },
];

export default routes;
