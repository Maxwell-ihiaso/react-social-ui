import { useContext } from 'react'
import { DarkModeContext } from '../context/darkModeContext'

const useDarkMode = () => {
  return useContext(DarkModeContext)
}

export default useDarkMode
