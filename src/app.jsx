import { PageLoading } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import Header from './components/Header';
import {createRef} from "react";
import { notification } from 'antd';
import { getStorage } from '@/utils/storage';

const loginPath = '/user/login';

export const initialStateConfig = {
  loading: <PageLoading />,
};

export async function getInitialState() {
  const {
    location: { pathname },
  } = history;
  const fetchUserInfo = async () => {
    try {
      return (await getStorage('userInfo')) || {};
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  // 如果是登录页面
  if (pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return { fetchUserInfo, currentUser, settings: {} };
  }

  return { fetchUserInfo, settings: {} };
}

/**
 *
 * @param initialState
 * @returns {function()}
 */
const redirectLogin = (initialState) => {
  const { location } = history;
  if (!initialState?.currentUser && location.pathname !== loginPath) {
    return () =>
      !initialState?.currentUser && location.pathname !== loginPath && history.push(loginPath);
  }
  return () => {};
};

export const layout = props => {
  const { initialState } = props;
  return {
    rightContentRender: () => <Header {...props} />,
    disableContentMargin: true,
    title: false,
    logo: false,
    layout: 'side',
    fixedHeader: true,
    collapsed: initialState.collapsed,
    onPageChange: () => {
      const { location } = history; // 如果没有登录，重定向到 login

      if (
        (!initialState?.currentUser) &&
        location.pathname !== loginPath
      ) {
        notification.error({
          message: '验证失败',
          description: '请重新登录',
          onClose: () => history.push(loginPath),
          duration: 0.5,
        });
      }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};
