import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkThemes {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    to: string;
    theme?: AppLinkThemes;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        theme = AppLinkThemes.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
