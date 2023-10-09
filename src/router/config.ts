import { lazy } from 'react'
import { Route, Routes } from './route.d'
import { testRouter } from './test/test'
const BasicLayout = lazy(() => import('@/layout/index'))
const Index = lazy(() => import('@/pages/index'))
const Login = lazy(() => import('@/pages/login/index'))
const NotFind = lazy(() => import('@/assets/404'))
const Loading = lazy(() => import('@/components/Loading/index'))

export const customRoute = [
  ...testRouter
]

// 路由表
const route: Routes = [
  {
    path: '/index',
    exact: true,
    Component: Index
  },
  {
    path: '/',
    exact: true,
    Component: BasicLayout,
    children: [
      ...customRoute
    ]
  },
  {
    path: '/login',
    exact: true,
    Component: Login
  },
  {
    path: '/404',
    exact: true,
    Component: NotFind
  },
  {
    path: '/loading',
    exact: true,
    Component: Loading
  },
]

export default route

//根据路径获取路由
const checkAuth = (routers: Routes, path: string): Route | null => {
  for (const data of routers) {
    if (data.path == path) return data
    if (data.children) {
      const res: Route | null = checkAuth(data.children, path)
      if (res) return res
    }
  }
  return null
}

export const checkRouterAuth = (path: string): Route | null => {
  let auth: Route | null = null
  auth = checkAuth(route, path)
  return auth
}
