import React from 'react'
import { Button } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'

const Test3: React.FC = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.setItem('token', '')
    const roleArr: string[] = []
    localStorage.setItem('role', JSON.stringify(roleArr))
    navigate('/')
  }
  return (
    <>
      <NavLink to="/loading">
        <h1>Test3 页面</h1>
      </NavLink>
      <Button type="primary" onClick={logout}>
        登出
      </Button>
    </>
  )
}

export default Test3
