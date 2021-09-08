import React from 'react';
import {Button, Form, Input, message} from 'antd';
import { useIntl, history, useModel } from 'umi';
import { login } from '@/services/ant-design-pro/api';
import './index.less'
import {UnlockOutlined, UserOutlined} from "@ant-design/icons";

export default (props) => {
  const [form] = Form.useForm();
  const { initialState, setInitialState } = useModel('@@initialState');
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      await setInitialState((s) => ({ ...s, currentUser: userInfo }));
    }
  };

  const finish = async (values) => {
    const msg = await login({ ...values, type: 'account' });

    if (msg.status === 'ok') {
      const defaultLoginSuccessMessage = intl.formatMessage({
        id: 'pages.login.success',
        defaultMessage: '登录成功！',
      });
      message.success(defaultLoginSuccessMessage);
      await fetchUserInfo();
      /** 此方法会跳转到 redirect 参数所在的位置 */

      if (!history) return;
      const { query } = history.location;
      const { redirect } = query;
      history.push(redirect || '/');
    }
  };

  return (
    <div className='login-container'>
        <h3><span>个人登录</span></h3>
      <Form from={form} size='large' onFinish={finish}>
        <Form.Item name='username'>
          <Input prefix={<UserOutlined />} placeholder='手机号码/邮箱/身份证号' />
        </Form.Item>
        <Form.Item name='password'>
          <Input.Password prefix={<UnlockOutlined />} placeholder='请输入密码' />
        </Form.Item>
        <Button type='primary' htmlType='submit' block>登录</Button>
      </Form>
    </div>
  );
};
