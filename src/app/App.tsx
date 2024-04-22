import React, { Suspense } from 'react';
import './styles/index.scss';
import { Header } from '@/widgets/Header';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/providers/ThemeProvider';
import { AppRouter } from '@/shared/providers/AppRouter';
import { SideBar } from '@/widgets/SideBar';

import '@/app/config/i18n/i18n';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                <div className="content">
                    <SideBar />
                    <div className="content-body">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>

        </div>
    );
};

export default App;
