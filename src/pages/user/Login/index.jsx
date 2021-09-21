import React from 'react';
import {Button, Form, Input, message} from 'antd';
import { useIntl, history, useModel } from 'umi';
import './index.less'
import {UnlockOutlined, UserOutlined} from "@ant-design/icons";
import { loginByPassword } from '@/services/user';
import { setStorage } from '@/utils/storage';

export default () => {
  const [form] = Form.useForm();
  const { initialState, setInitialState } = useModel('@@initialState');
  const intl = useIntl();

  const fetchUserInfo = async (data) => {
    const userInfo = await initialState?.fetchUserInfo?.();

    await setInitialState((s) => ({ ...s, currentUser: { ...(userInfo || {}), ...(data || {}) } }));
    setStorage('userInfo', { ...data });
  };

  const finish = async (values) => {
    try {
      const { data } = await loginByPassword({ ...values });
      if (data <= 0) throw new Error('登录失败，请检查账号或密码是否正确');
      const defaultLoginSuccessMessage = intl.formatMessage({
        id: 'pages.login.success',
        defaultMessage: '登录成功！',
      });
      message.success(defaultLoginSuccessMessage);
      await fetchUserInfo({ userId: data });

      if (!history) return;
      const { query } = history.location;
      const { redirect } = query;
      history.push(redirect || '/');
      return;
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className='login-container'>
        <h3><span>个人登录</span></h3>
      <Form from={form} size='large' onFinish={finish}>
        <Form.Item name='account' rules={[{required: true, message: '请输入账号'}]}>
          <Input prefix={<UserOutlined />} placeholder='手机号码/邮箱/身份证号' />
        </Form.Item>
        <Form.Item name='password' rules={[{required: true, message: '请输入密码'}]}>
          <Input.Password prefix={<UnlockOutlined />} placeholder='请输入密码' />
        </Form.Item>
        <Button type='primary' htmlType='submit' block>登录</Button>
      </Form>
    </div>
  );
};
