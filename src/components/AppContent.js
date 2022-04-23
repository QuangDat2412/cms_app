import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CContainer, CSpinner, CCard, CCardBody } from '@coreui/react';

// routes config
import routes from '../routes';

const AppContent = () => {
    return (
        <CContainer lg>
            <CCard>
                <CCardBody>
                    <Suspense fallback={<CSpinner color="primary" />}>
                        <Routes>
                            {routes.map((route, idx) => {
                                return (
                                    route.element && (
                                        <Route key={idx} path={route.path} exact={route.exact} name={route.name} element={<route.element />} />
                                    )
                                );
                            })}
                            <Route path="/" element={<Navigate to="programs" replace />} />
                        </Routes>
                    </Suspense>
                </CCardBody>
            </CCard>
        </CContainer>
    );
};

export default React.memo(AppContent);
