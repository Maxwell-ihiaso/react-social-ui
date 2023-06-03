import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/authContext'
import { DarkModeContextProvider } from './context/darkModeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </AuthContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
