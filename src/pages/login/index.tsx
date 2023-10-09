import ikloge from '@/assets/images/ikloge.png'
import SvgIcon from '@/components/Svg'
import { settings } from '@/settings'
import { LoginOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, message } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.less'

interface User {
  username: string
  password: string
}

const Login: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User>({
    username: 'ikisy',
    password: '263520lk',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (values.username === 'ikisy' && values.password === '263520lk') {
        localStorage.setItem(
          'token',
          'NVJIHWEUF_vbfsjiheriunsbikhtopherhiwubnreka',
        )
        const roleArr: string[] = ['客户管理员']
        localStorage.setItem('roles', JSON.stringify(roleArr))
        navigate('/')
      } else {
        messageApi.open({
          type: 'error',
          content: '账号/密码错误！',
        })
      }
    }, 2000)
  }
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <>
      {contextHolder}
      <div className="login">
        <div className="login-chart">
          <div className="login-chart-loge">
            <img src={ikloge} alt="" />
          </div>
          <SvgIcon name="login" size="80%"></SvgIcon>
        </div>
        <div className="login-form">
          <div className="form-title">
            <div className="form-title-welcome">Welcome Back : )</div>
            <div className="form-title-name">{settings.title}</div>
          </div>
          <div className="form-content">
            <Form
              name="normal_login"
              className="form-content-form"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
                initialValue={userInfo.username}
              >
                <Input placeholder="请输入用户名" onPressEnter={onFinish} />
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
                initialValue={userInfo.password}
              >
                <Input.Password
                  placeholder="请输入密码"
                  onPressEnter={onFinish}
                />
              </Form.Item>
              <Form.Item>
                <div className="form-content-form-password">
                  <div className="form-content-form-remember">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox onChange={onChange}>记住密码</Checkbox>
                    </Form.Item>
                  </div>
                  <a className="form-content-form-forgot" href="">
                    忘记密码
                  </a>
                </div>
              </Form.Item>
              <Form.Item>
                <div className="form-item-center form-content-form-login">
                  <Button
                    block
                    htmlType="submit"
                    className="form-content-form-button"
                    size="large"
                    loading={loading}
                  >
                    登录
                    {<LoginOutlined />}
                  </Button>
                </div>
              </Form.Item>
              <Form.Item>
                <div className="form-item-center form-content-form-enroll">
                  还没有账号？<a href="">立即注册</a>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
