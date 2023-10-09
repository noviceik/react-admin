import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLayout from './components/Header'
import SidebarLayout from './components/Sidebar'
import './index.less'

const BasicLayout: React.FC = () => {
  return (
    <div className="basic-layout">
      <HeaderLayout />
      <div className="basic-layout-content">
        <SidebarLayout />
        <div className="content-layout">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default BasicLayout
