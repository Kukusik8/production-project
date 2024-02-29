import { classNames } from "shared/lib/ClassNames/classNames";
import cls from './LangSwitcher.module.scss'
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "../Button/Button";
import { Theme } from "app/providers/ThemeProvider";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const [t, i18n] = useTranslation();

    const toggle = async() => {
        i18n.changeLanguage(i18n.language === 'ru' ? "en" : "ru");
      }

    return (
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}>
                {t('Язык')}    
            </Button>

    )
}

  
