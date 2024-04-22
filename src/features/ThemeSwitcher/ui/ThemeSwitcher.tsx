import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/providers/ThemeProvider';
import SvgMoon from '@/shared/assets/icons/moon.svg';
import SvgSun from '@/shared/assets/icons/sun.svg';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;

    const { toggleTheme, theme } = useTheme();

    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <Button
                theme={ButtonThemes.CLEAR}
                onClick={toggleTheme}
            >
                {theme === 'dark'
                    ? (
                        <SvgMoon
                            className={classNames(cls.icon, {}, [cls.iconMoon])}
                        />
                    )
                    : (
                        <SvgSun
                            className={classNames(cls.icon, {}, [cls.iconSun])}
                        />
                    )}
            </Button>
        </div>
    );
};
