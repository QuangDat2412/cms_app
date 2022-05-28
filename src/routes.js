import React from 'react';

const User = React.lazy(() => import('./views/users'));
const Course = React.lazy(() => import('./views/courses'));
const Topics = React.lazy(() => import('./views/courses/topic'));
const CourseDetails = React.lazy(() => import('./views/courses/courseDetail'));

const routes = [
    { path: '/', exact: true, name: 'Trang chủ' },
    { path: '/students', name: 'Danh sách người dùng', element: User },
    { path: '/topics', name: 'Thêm mới khóa', element: Topics },
    { path: '/courses/:code', name: 'Chi tiết khóa', element: CourseDetails },
    { path: '/courses', name: 'Khóa học', element: Course },
];

export default routes;
