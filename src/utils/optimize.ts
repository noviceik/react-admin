/**
 * 防抖函数
 * @param fn 执行的函数
 * @param delay 延迟时间 ms
 * @return 
*/
export function debounce(fn: Function, delay: number): any {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

/**
 * 节流函数
 * @param fn 执行的函数
 * @param delay 延迟时间 ms
 * @return 
*/
export function throttle(fn: Function, delay: number): any {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}


