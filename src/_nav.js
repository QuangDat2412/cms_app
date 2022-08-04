import React from 'react';
import { UserOutlined } from '@ant-design/icons';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const _nav = [
    getItem('Khóa học', 'course', <UserOutlined />, [
        getItem('Danh sách khóa học', `courses`),
        getItem('Danh sách chủ đề', `topics`),
        getItem('Danh sách bài học', `lessons`),
        getItem('Danh sách loại khóa học', `typeCourses`),
    ]),
    getItem('Danh sách người dùng', 'users', <UserOutlined />),
];

export default _nav;
