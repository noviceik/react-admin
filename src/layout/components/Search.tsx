// 时钟组件
import React, { useState, useRef } from 'react'
import '@/layout/index.less'
import { SearchOutlined } from '@ant-design/icons'

const Search: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('')
  const [boxStyle, setBoxStyle] = useState<any>({})
  const inputEl = useRef(null)

  const enterInput = () => {
    inputEl.current.focus()
  }

  const inputFocus = () => {
    setBoxStyle({
      border: '2px solid #aebef2',
    })
  }
  const inputBlur = () => {
    setBoxStyle({})
  }
  const btnClick = () => {}
  const inputDown = (e) => {
    if (e.keyCode === 13) {
      console.log(inputVal)
    }
  }

  return (
    <>
      <div className="search">
        <div className="search-box" onMouseEnter={enterInput} style={boxStyle}>
          <a className="search-btn" onClick={btnClick}>
            <SearchOutlined
              style={{ fontSize: '20px', color: '#7581a8' }}
              className="icon"
            />
          </a>
          <input
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value)
            }}
            onFocus={inputFocus}
            onBlur={inputBlur}
            onKeyDown={inputDown}
            ref={inputEl}
            type="text"
            className="search-txt"
            placeholder="搜索"
          />
        </div>
      </div>
    </>
  )
}

export default Search
