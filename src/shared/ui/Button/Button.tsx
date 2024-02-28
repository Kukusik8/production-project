import React, { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/ClassNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
} =props
  return (
      <button
          className={classNames(cls.Button, {[cls[theme]]:true}, [className])}
          {...otherProps}
      >
          {children}
    </button>
  )
}

export default Button