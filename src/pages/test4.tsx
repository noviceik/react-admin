import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Test4: React.FC = () => {
  return (
    <>
      <NavLink to="/test1">
        <h1>Test4 页面</h1>
      </NavLink>
      <Outlet />
    </>
  )
}

export default Test4
