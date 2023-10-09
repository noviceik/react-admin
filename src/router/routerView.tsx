import { Suspense, useMemo } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'
import { CLodaing } from '@/components/Loading'
import route from './config'
import { Routes } from './route.d'

const routes: Routes = [...route]
// 注册路由
const RegisterRouter = (routes: Routes): RouteObject[] => {
  // 存在子项递归调用
  const SyncRouter = (routes: Routes): RouteObject[] => {
    let mRouteTable: RouteObject[] = []
    routes.forEach((route) => {
      mRouteTable.push({
        path: route.path,
        element: (
          <Suspense fallback={<CLodaing />}>
            <route.Component />
          </Suspense>
        ),
        children: route.children && SyncRouter(route.children),
      })
    })
    return mRouteTable
  }
  return SyncRouter(routes)
}

export default () =>
  useRoutes(useMemo<RouteObject[]>(() => RegisterRouter(routes), []))
