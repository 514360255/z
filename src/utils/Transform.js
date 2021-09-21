/**
 * 转换proTable response
 * @param request
 * @param current
 * @param params
 * @returns {Promise<{total, current, data: *[], pageSize}>}
 */
export const transformProTableResponse = async (request, { current, ...params }) => {
  const {
    data,
    data: { detail, data: list, page, pageSize, totalPage, ...others },
  } = await request({ ...params, page: current });
  return {
    data: Array.isArray(data) ? data : detail || list,
    total: totalPage,
    pageSize,
    current: page,
    ...others,
  };
};

/**
 * 转换成column可以使用的valueEnum
 * @param options
 * @param key
 * @param value
 */
export const transformValueEnum = ({ options = [], key = 'name', value = 'code' }) => {
  const result = {};
  options.forEach((item) => {
    result[item[value]] = {
      text: item[key],
    };
  });
  return result;
};

/**
 * 转换成ant design radio/select等组件识别的属性
 * @param options
 * @param key
 * @param value
 * @returns {[]}
 */
export const transformAntdLabelValue = (options = [], key = 'name', value = 'code') => {
  const result = [];
  (options || []).forEach((item) => {
    result.push({ label: item[key], value: item[value] });
  });
  return result;
};

/**
 * 数据转换成key、title、children结构
 *
 * @param data
 * @param keyPropName
 * @param titlePropName
 * @param childrenPropName
 * @returns {{title: *, key: *}[]}
 */
export const transformDataToKeyTitle = (
  data = [],
  childrenPropName = 'children',
  keyPropName = 'id',
  titlePropName = 'name',
) => {
  return data.map((item) => ({
    key: item[keyPropName] || item.code,
    title: item[titlePropName],
    ...item,
    ...((item[childrenPropName] && {
      children: transformDataToKeyTitle(
        item[childrenPropName],
        childrenPropName,
        keyPropName,
        titlePropName,
      ),
    }) ||
      {}),
  }));
};
