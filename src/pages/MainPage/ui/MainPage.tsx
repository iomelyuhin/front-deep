import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t('Main page')}
        </div>
    );
};

export default MainPage;
