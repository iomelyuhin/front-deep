import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/constants/router';

interface NavBarProps {
    className?: string;
}

export const Header = (props: NavBarProps) => {
    const { className } = props;

    const { t } = useTranslation(['translation', 'about']);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <AppLink
                to={RoutePath[AppRoutes.MAIN]}
                theme={AppLinkThemes.PRIMARY}
            >
                {t('Main page')}
            </AppLink>
            <AppLink
                to={RoutePath[AppRoutes.ABOUT]}
                theme={AppLinkThemes.PRIMARY}
            >
                {t('About page', { ns: 'about' })}
            </AppLink>
        </div>
    );
};
