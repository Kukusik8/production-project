import { classNames } from 'shared/lib/ClassNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps{
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
        </div>
    </div>
);

export default Navbar;
