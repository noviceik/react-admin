import React from 'react'
import './index.less'

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="spinner-box">
        <div className="blue-orbit leo"></div>
        <div className="green-orbit leo"></div>
        <div className="red-orbit leo"></div>
        <div className="white-orbit w1 leo"></div>
        <div className="white-orbit w2 leo"></div>
        <div className="white-orbit w3 leo"></div>
        <div className="load">
          Loading
          <span className="load-doc">
            <span className="doc">...</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Loading

export const CLodaing: React.FC = () => {
  return (
    <div className="c-loading">
      <div className="c-spinner-box">
        <div className="three-quarter-spinner"></div>
      </div>
    </div>
  )
}
