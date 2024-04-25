import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';

interface NavBarProps {
    className?: string;
}

export const Header = (props: NavBarProps) => {
    const { className } = props;

    const { t } = useTranslation(['translation', 'about']);

    return (
        <div className={classNames(cls.NavBar, {}, [className])} />
    );
};
