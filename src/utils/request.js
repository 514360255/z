/**
 * @name: request
 * @author: Cesar_shang
 * @date: 2021/9/13 14:41
 * @description：request
 * @update: 2021/9/13 14:41
 */
import axios from 'axios';
import { notification } from 'antd';

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { status, statusText } = error.response;
    notification.error({
      message: status,
      description: statusText,
    });
    return Promise.reject(error);
  },
);

export default axios;
