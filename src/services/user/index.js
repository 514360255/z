
import request from '@/utils/request';

/**
 * 使用密码登录
 * @param data
 */
export const loginByPassword = (data) =>
  request('/api/account/login', {
    method: 'POST',
    data,
  });

/**
 * 退出登录
 * @param data
 */
export const logout = (data) =>
  request('/api/account/logout', {
    method: 'POST',
    data,
  });
