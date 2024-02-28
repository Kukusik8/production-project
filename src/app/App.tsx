import './styles/index.scss'
import React, { Suspense, useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/ClassNames/classNames'
// import { AboutPagesAsync } from 'pages/AboutPage/ui/AboutPage.async'
// import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async'
import { AboutPage } from 'pages/AboutPage/ui'
import { MainPage } from 'pages/MainPage'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'



function App() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter/>
    </div>
  )
}

export default App