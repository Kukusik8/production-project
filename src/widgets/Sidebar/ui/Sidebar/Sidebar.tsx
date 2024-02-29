import React, { useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/ClassNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'

interface SidebaraProps {
    className?:string
}

const Sidebar = ({className}:SidebaraProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

  return (
      <div
          className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
      
      >
          
          <button onClick={onToggle}>toggle</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>

    </div>
  )
}

export default Sidebar