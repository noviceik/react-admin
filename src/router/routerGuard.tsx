// 路由拦截器
import { ReactElement } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { checkRouterAuth } from './config'
import { Route } from './route.d'

// 白名单页，无需token认证
const whiteList: string[] = ['/login', '/404']

// 拦截认证
const Guard = ({ children }: { children: ReactElement }) => {
  const { pathname } = useLocation()
  const nextPath = onRouterBefore ? onRouterBefore(pathname) : pathname
  if (nextPath && nextPath !== pathname) {
    children = <Navigate to={nextPath} replace={true} />
  }
  return children
}

/**
 * 递归调用，判断是否存在子项并跳转到对应的子项
 * @param route 当前路由
 */
const navToChilde = (route: Route): string | null => {
  // 拿到的子路由地址
  let toPath: string | null = null
  // 判断是否存在子路由
  if (route.children && route.children.length) {
    // 添加了重定向的地址则获取对应地址，没有就获取子项第一项
    if (route.redirect) {
      const obj = checkRouterAuth(route.redirect)
      const childePath = navToChilde(obj)
      if (childePath) {
        toPath = childePath
      } else {
        toPath = route.redirect
      }
    } else {
      const obj = checkRouterAuth(route.children[0].path)
      const childePath = navToChilde(obj)
      if (childePath) {
        toPath = childePath
      } else {
        toPath = route.children[0].path
      }
    }
  }
  return toPath
}

/**
 *    路由拦截
 * @param pathname 跳转的路径
 */
const onRouterBefore = (pathname: string): string => {
  if (whiteList.includes(pathname)) {
    //  加上你的判断条件 白名单、是否登陆、是否有权限进入
    return pathname
  }
  // if return 非白名单，需要登陆的验证，可结合token、用户信息
  // 拿到匹配的路由
  const obj = checkRouterAuth(pathname)
  // 拿到token
  const token: string = localStorage.getItem('token')
  // 拿到角色数组
  const roles: string[] = JSON.parse(localStorage.getItem('roles')) || []

  if (token) {
    if (obj) {
      // 添加角色限制就走认证
      const roleArr = obj.meta?.roles
      let roleFlag = false
      if (roleArr) {
        // 判断账号权限是否包含页面权限
        roleArr.forEach((item) => {
          if (roles.indexOf(item) !== -1) {
            roleFlag = true
          }
        })
      } else {
        roleFlag = true
      }
      // 认证通过才放行
      if (roleFlag) {
        if (navToChilde(obj)) {
          return navToChilde(obj)
        }
        return pathname
      }
    }
    return '/404'
  }
  // if return router路径是否有权限进入的认证，可结合系统授权返回菜单
  return '/login'
}

export default Guard
