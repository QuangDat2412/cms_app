import React from 'react';

const User = React.lazy(() => import('./views/users'));
const Course = React.lazy(() => import('./views/courses'));
const Topics = React.lazy(() => import('./views/topic'));
const Lessons = React.lazy(() => import('./views/lesson'));
const TypeCourses = React.lazy(() => import('./views/typeCourse'));

const routes = [
    { path: '/users', name: 'Danh sách người dùng', element: User, isAdmin: true },
    { path: '/typeCourses', name: 'Danh sách loại khóa học', element: TypeCourses, isAdmin: true },
    { path: '/topics', name: 'Chủ đè', element: Topics, isAdmin: true },
    { path: '/courses', name: 'Khóa học', element: Course, isAdmin: true },
    { path: '/lessons', name: 'Bài học', element: Lessons, isAdmin: true },
];

export default routes;
