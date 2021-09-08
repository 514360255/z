import { request } from 'umi';

/**
 * sms login
 * @param params
 * @returns {Promise<*>}
 */
export const smsLogin = async (params) => {
  return request('/worker/common/login/sms', {
    method: 'POST',
    data: params,
  });
};

/**
 * login
 * @param params
 * @returns {Promise<*>}
 */
export const login = async (params) => {
  return request('/worker/common/login', {
    method: 'POST',
    data: params,
  });
};

/**
 * 注册
 * @param params
 * @returns {Promise<*>}
 */
export const register = async (params) => {
  return request('/worker/common/register', {
    method: 'POST',
    data: params,
  });
};
