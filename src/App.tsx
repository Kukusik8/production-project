import React, { Suspense, useContext, useState } from 'react'
import { Counter } from './components/Counter'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import { Link } from 'react-router-dom'
import { AboutPagesAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/ClassNames/classNames'



function App() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О сайте</Link>

        <Suspense fallback={<div>Loading...</div>}>
      <Routes> 
        <Route path={'/about'} element={<AboutPagesAsync />} />
        <Route path={'/'} element={<MainPageAsync />}/>
      </Routes>
        </Suspense>
    </div>
  )
}

export default App