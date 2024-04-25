import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short } = props;
    const { i18n, t } = useTranslation();

    const changeLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button
                onClick={changeLang}
                theme={ButtonThemes.CLEAR}
                className={cls.button}
            >
                { short ? t('lang') : t('language') }
            </Button>
        </div>
    );
};
