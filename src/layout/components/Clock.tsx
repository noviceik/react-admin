// 时钟组件
import React, { useState, useEffect } from 'react'
import { formateDate } from '@/hook/useFormateDate'
import '@/layout/index.less'
import { useSpring, animated } from 'react-spring'

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<number>(Date.now())
  const [time, setTime] = useState<string>()

  const multiAnimation = useSpring({
    from: { opacity: 0, color: '#fff' },
    to: { opacity: 1, color: '#7581a8' },
    delay: 1000,

    config: {
      mass: 2, //弹簧质量：回弹惯性，质量越大惯性越大

      tension: 30, //弹簧张力：影响整体速度，张力越紧速度越快

      friction: 10, //摩擦力：可以与mass、tension的效果相互抵消
    },
  })

  useEffect(() => {
    getTime()
  }, [time])
  const getTime = () => {
    const timeID = setInterval(() => {
      setCurrentTime(Date.now())
      const result = formateDate(currentTime)
      setTime(result)
      clearInterval(timeID)
    }, 1000)
  }
  return (
    <>
      {/* <div className="time">{time}</div> */}
      <animated.div style={multiAnimation} className="time">
        {time}
      </animated.div>
    </>
  )
}

export default Clock
