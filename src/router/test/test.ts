import { lazy } from 'react'
import { Routes } from '../route.d'
const Test1 = lazy(() => import('@/pages/test1'))
const Test2 = lazy(() => import('@/pages/test2'))
const Test3 = lazy(() => import('@/pages/test3'))
const Test4 = lazy(() => import('@/pages/test4'))
const Test5 = lazy(() => import('@/pages/test5'))
const Test6 = lazy(() => import('@/pages/test6'))
const Test7 = lazy(() => import('@/pages/test7'))

export const testRouter: Routes = [
  {
    path: '/test1',
    exact: true,
    Component: Test1,
    meta: {
      title: '测试1',
      roles: ['超级管理员', '客户管理员'],
      icon: 'index',
    },
    children: [
      {
        path: '/test1/test3',
        exact: true,
        Component: Test3,
        meta: {
          title: '测试3',
          roles: ['超级管理员', '客户管理员'],
          icon: 'index',
        }
      },
      {
        path: '/test1/test4',
        exact: true,
        Component: Test4,
        meta: {
          title: '测试4',
          roles: ['超级管理员', '客户管理员'],
          icon: 'index',
        },
        children: [
          {
            path: '/test1/test4/test5',
            exact: true,
            Component: Test5,
            meta: {
              title: '测试5',
              roles: ['超级管理员', '客户管理员'],
              icon: 'index',
            },
            children: [
              {
                path: '/test1/test4/test5/test6',
                exact: true,
                Component: Test6,
                meta: {
                  title: 'Test6',
                  roles: ['超级管理员', '客户管理员'],
                }
              },
            ]
          },
        ]
      },
    ]
  },
  {
    path: '/test2',
    exact: true,
    Component: Test2,
    meta: {
      title: '测试2',
      roles: ['超级管理员'],
      icon: 'send',
    }
  },
  {
    path: '/test7',
    exact: true,
    Component: Test7,
    meta: {
      title: '测试7',
      roles: ['超级管理员'],
      icon: 'send',
    }
  }
]
