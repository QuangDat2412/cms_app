import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilUser, cilBook } from '@coreui/icons';
import { CNavItem, CNavGroup } from '@coreui/react';

const _nav = [
    {
        component: CNavGroup,
        name: 'Khóa học',
        icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Danh sách khóa học',
                to: '/courses',
            },
            {
                component: CNavItem,
                name: 'Chủ đề',
                to: '/topics',
            },
            {
                component: CNavItem,
                name: 'Bài học',
                to: '/lessons',
            },
        ],
    },
    {
        component: CNavItem,
        name: 'Danh sách người dùng',
        to: '/users',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        badge: {
            color: 'info',
        },
    },
];

export default _nav;
