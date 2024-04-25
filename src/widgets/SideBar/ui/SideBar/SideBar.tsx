import React, { useState } from 'react';
import { t } from 'i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonSize, ButtonThemes } from '@/shared/ui/Button/Button.types';
import SvgArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import SvgArrowRight from '@/shared/assets/icons/arrow-right.svg';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/constants/router';
import SvgHome from '@/shared/assets/icons/home.svg';
import SvgAbout from '@/shared/assets/icons/about.svg';

interface SideBarProps {
    className?: string;
}

export const SideBar = (props: SideBarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleBar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="SideBar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={classNames(cls.Links)}>
                <AppLink
                    className={classNames(cls.Link)}
                    to={RoutePath[AppRoutes.MAIN]}
                    theme={AppLinkThemes.PRIMARY}
                >
                    <SvgHome className={cls.LinkIcon} />
                    <span>
                        {t('Main page')}

                    </span>
                </AppLink>
                <AppLink
                    className={classNames(cls.Link)}
                    to={RoutePath[AppRoutes.ABOUT]}
                    theme={AppLinkThemes.PRIMARY}
                >
                    <SvgAbout className={cls.LinkIcon} />
                    <span>
                        {t('About page', { ns: 'about' })}
                    </span>
                </AppLink>
            </div>
            <Button
                onClick={toggleBar}
                className={cls.button}
                theme={ButtonThemes.BACKGROUND}
                data-testid="side-bar-button"
                square
                size={ButtonSize.L}
            >
                {collapsed
                    ? <SvgArrowRight className={classNames(cls.icon)} />
                    : <SvgArrowLeft className={classNames(cls.icon)} />}
            </Button>
            <div className={classNames(cls.footer, { [cls.column]: collapsed && collapsed })}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>

        </div>
    );
};
