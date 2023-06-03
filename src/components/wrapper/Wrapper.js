import React from 'react'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

const Wrapper = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
      <Outlet />
    </div>
  )
}

export default Wrapper
