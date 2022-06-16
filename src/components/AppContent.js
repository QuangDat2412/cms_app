import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CCard, CCardBody } from '@coreui/react';
import routes from '../routes';
import { useSelector } from 'react-redux';
import { authSelector } from 'src/redux/auth/auth.slice';

const AppContent = () => {
    const currentUser = useSelector(authSelector.currentUser);
    return (
        <>
            <Routes>
                {routes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={currentUser?.isAdmin || !route?.isAdmin ? <route.element /> : <Navigate to="/404" replace />}
                            />
                        )
                    );
                })}
                <Route path="/" element={<Navigate to="courses" replace />} />
            </Routes>
        </>
    );
};

export default React.memo(AppContent);
