import React from 'react'
import '@/layout/index.less'

const HeaderLayout: React.FC = () => {
  return (
    <>
      <div className="header-layout">
        <div className="header-left">
          <img src="@/assets/images/ikloge.png" />
          <span className="left-text">ik's react admin</span>
        </div>
        <div className="header-conter"></div>
        <div className="header-right"></div>
      </div>
    </>
  )
}

export default HeaderLayout
