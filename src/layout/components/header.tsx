import avatar from '@/assets/images/avatar.jpg'
import ikloge from '@/assets/images/ikloge.png'
import Clock from '@/layout/components/Clock'
import '@/layout/index.less'
import { settings } from '@/settings'
import { collapsedStore } from '@/store'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageTwoTone,
  SettingOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons'
import { Avatar, Divider, Popover } from 'antd'
import React from 'react'
import { useSnapshot } from 'valtio'
import Search from './Search'

const HeaderLayout: React.FC = () => {
  const { collapsed, setCollapsed } = useSnapshot(collapsedStore)

  const content = (
    <div className="labelBox">
      <div className="label-avatar">
        <Avatar size={52} src={avatar} className="avatar-item" />
        <div className="avatar-text">
          <div className="username">noviceik@163.com</div>
          <div className="user-info">账号信息 {'>'}</div>
        </div>
      </div>
      <Divider />
      <p>
        <SettingOutlined className="labelIcon" style={{ fontSize: '1.2em' }} />
        设置
      </p>
      <Divider />
      <p>
        <UserSwitchOutlined
          className="labelIcon"
          style={{ fontSize: '1.2em' }}
        />
        切换账号
      </p>
    </div>
  )

  const changeCollapsed = () => {
    setCollapsed()
  }

  const collapsedDom = (
    <div className="collapsed" onClick={changeCollapsed}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  )

  return (
    <>
      <div className="header-layout">
        <div className="header-left">
          <img src={ikloge} />
          <span className="left-text">{settings.title}</span>
        </div>
        <div className="header-conter">
          {collapsedDom}
          <Search />
        </div>
        <div className="header-right">
          <div className="now-time">
            <Clock />
          </div>
          <div className="notice">
            <MessageTwoTone
              twoToneColor="#7581a8"
              style={{ fontSize: '1.5em' }}
            />
          </div>
          <div className="avatar">
            <Popover placement="bottomRight" content={content} trigger="click">
              <Avatar src={avatar} />
            </Popover>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderLayout
