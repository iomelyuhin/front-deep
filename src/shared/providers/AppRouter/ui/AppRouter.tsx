import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { RouteConfig } from '@/app/config/configRouter/configRouter';
import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {
                Object.values(RouteConfig)
                    .map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))
            }
        </Routes>
    </Suspense>
);
