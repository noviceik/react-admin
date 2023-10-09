import React from 'react'
import './index.less'

const CLodaing: React.FC = () => {
  return (
    <div className="cLoading">
      <div className="c-spinner-box">
        <div className="configure-border-1">
          <div className="configure-core"></div>
        </div>
        <div className="configure-border-2">
          <div className="configure-core"></div>
        </div>
      </div>
    </div>
  )
}

export default CLodaing
