import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import SvgArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import SvgArrowRight from '@/shared/assets/icons/arrow-right.svg';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

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
            <Button
                onClick={toggleBar}
                className={cls.button}
                theme={ButtonThemes.CLEAR}
                data-testid="side-bar-button"
            >
                {collapsed
                    ? <SvgArrowRight className={classNames(cls.icon)} />
                    : <SvgArrowLeft className={classNames(cls.icon)} />}
            </Button>
            <div className={classNames(cls.footer)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

        </div>
    );
};
