import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    collapsed?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, collapsed } = props;
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
                { collapsed ? t('lang') : t('language') }
            </Button>
        </div>
    );
};
