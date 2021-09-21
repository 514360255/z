/**
 * deep by key find node
 * @param data 数据源
 * @param value 查找的值
 * @param key 根据哪个属性查找值
 * @param children 下一级属性
 */
export const getOptions = (data, value, key = 'value', children = 'children') => {
  for (const item of data) {
    if (item[key] === value) return item;
    if (item[children] && Array.isArray(item[children])) {
      const result = getOptions(item[children], value, key, children);
      if (result) return result;
    }
  }
  return null;
};
