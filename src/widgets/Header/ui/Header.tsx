import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonSize, ButtonThemes } from '@/shared/ui/Button/Button.types';
import { Modal } from '@/shared/ui/Modal/Modal';

interface NavBarProps {
    className?: string;
}

export const Header = (props: NavBarProps) => {
    const { className } = props;

    const { t } = useTranslation(['translation', 'about']);

    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
    }, []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button
                theme={ButtonThemes.OUTLINE}
                size={ButtonSize.M}
                className={cls.link}
                onClick={onToggleModal}
            >
                {t('Sign in')}
            </Button>
            <Modal isOpen={isOpen} onClose={onToggleModal}>
                {t('Enter your email and pass')}
            </Modal>
        </div>
    );
};
