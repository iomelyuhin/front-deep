import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = (props: PageErrorProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Something went wrong')}
            <Button
                onClick={reloadPage}
                theme={ButtonThemes.CLEAR}
            >
                {t('Reload page')}
            </Button>
        </div>
    );
};
