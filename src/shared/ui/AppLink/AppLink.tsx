import React, { FC } from 'react'
import { classNames } from 'shared/lib/ClassNames/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = 'seconary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const { to, children, className, theme=AppLinkTheme.PRIMARY } = props
    
    return (
        <Link to={to} className={classNames(cls.AppLink, {[cls[theme]]:true},[])}>
          {children}
    </Link>
  )
}

export default AppLink   