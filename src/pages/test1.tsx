import SvgIcon from '@/components/Svg'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Test1: React.FC = () => {
  return (
    <>
      <NavLink to="/test2">
        <div style={{ color: 'red' }}>
          <SvgIcon name="index" color={'red'}></SvgIcon>
          <h1>Test1 页面</h1>
        </div>
      </NavLink>
      <Outlet />
    </>
  )
}

export default Test1
