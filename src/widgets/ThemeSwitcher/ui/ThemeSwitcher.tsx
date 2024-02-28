import React from 'react'
import cls from './ThemeSwitcher.module.scss'
import { classNames } from '../../../shared/lib/ClassNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemewitcherProps {
  className?: string;


}

export const ThemeSwitcher = ({ className }: ThemewitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <Button 
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      SWITCH
     {theme === Theme.DARK ? <DarkIcon/>: <LightIcon/>} 
    </Button>
  )
}

export default ThemeSwitcher;