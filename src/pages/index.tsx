import React from 'react'
import { NavLink } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <>
      <NavLink to="/">to about</NavLink>
      <h1>Index 页面</h1>
    </>
  )
}

export default Index
