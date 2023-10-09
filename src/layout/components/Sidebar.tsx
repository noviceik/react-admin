import SvgIcon from '@/components/Svg'
import { customRoute } from '@/router/config'
import { Routes } from '@/router/route.d'
import { collapsedStore } from '@/store'
import { debounce } from '@/utils/optimize'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuItem[] = []

function setMenu(routerArr: Routes, menuArr: MenuItem[]) {
  routerArr.forEach((item) => {
    const label = item.meta.title
    const key = item.path
    const icon = item.meta.icon ? (
      item.meta.icon.render ? (
        item.meta.icon.render()
      ) : (
        <SvgIcon name={item.meta.icon}></SvgIcon>
      )
    ) : null
    const children = item.children ? item.children : null
    const childrenMenu = []
    if (children) {
      setMenu(children, childrenMenu)
    }
    menuArr.push(
      getItem(label, key, icon, childrenMenu.length ? childrenMenu : null),
    )
  })
}
setMenu(customRoute, items)

const SidebarLayout: React.FC = () => {
  const { collapsed, setCollapsed } = useSnapshot(collapsedStore)
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }
  window.onresize = debounce(function () {
    const offsetWid = document.documentElement.clientWidth
    if (offsetWid < 1024) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }, 100)
  return (
    <>
      <div className="sidebar-layout" style={{ width: collapsed ? 53 : 250 }}>
        <div>
          <Menu
            mode="inline"
            onClick={onClick}
            inlineCollapsed={collapsed}
            items={items}
            style={{ width: collapsed ? 53 : 250 }}
          />
        </div>
      </div>
    </>
  )
}

export default SidebarLayout
