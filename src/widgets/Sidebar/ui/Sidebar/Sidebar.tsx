import React, { useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/ClassNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

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
              {/*language switcher*/}
          </div>

    </div>
  )
}

export default Sidebar