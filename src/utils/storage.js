const storagePrex = 'xt';

export const setStorage = (key, value) => {
  localStorage.setItem(`${storagePrex}:${key}`, JSON.stringify(value));
};

export const getStorage = (key) => {
  const data = localStorage.getItem(`${storagePrex}:${key}`);
  return data ? JSON.parse(data) : null;
};

export const removeStorage = () => {
  localStorage.clear();
};

/**
 * 获取cookie
 * @returns {{}}
 */
export const getCookie = () => {
  const cookies = document.cookie.split(';');
  const result = {};
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    result[key.trim()] = value;
  }
  return result;
};
