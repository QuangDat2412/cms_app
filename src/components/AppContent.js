import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CSpinner, CCard, CCardBody } from '@coreui/react';

// routes config
import routes from '../routes';

const AppContent = () => {
    return (
        <div>
            <CCard>
                <CCardBody>
                    <Routes>
                        {routes.map((route, idx) => {
                            return (
                                route.element && (
                                    <Route key={idx} path={route.path} exact={route.exact} name={route.name} element={<route.element />} />
                                )
                            );
                        })}
                        <Route path="/" element={<Navigate to="courses" replace />} />
                    </Routes>
                </CCardBody>
            </CCard>
        </div>
    );
};

export default React.memo(AppContent);
