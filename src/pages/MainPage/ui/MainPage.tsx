import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Counter } from '@/entities/Counter';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t('Main page')}
            <Counter />
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                Test content
            </Modal>
        </div>
    );
};

export default MainPage;
