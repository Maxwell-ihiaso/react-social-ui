import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, LeftBar, RightBar } from '../index'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <main style={{ flex: 6 }}>
          <Outlet />
        </main>
        <RightBar />
      </div>
    </>
  )
}

export default Layout
