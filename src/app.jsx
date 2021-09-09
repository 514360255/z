import { PageLoading } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import Header from './components/Header';
import {createRef} from "react";

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
      const msg = await queryCurrentUser();
      return msg.data;
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
    onPageChange: () => redirectLogin(initialState),
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};
