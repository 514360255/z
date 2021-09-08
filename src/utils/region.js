import provinces from "@/localData/provinces.json";
import cities from "@/localData/cities.json";
import areas from "@/localData/areas.json";
import { groupBy, find } from "lodash";

/**
 * 获取省列表
 * @returns {*}
 */
export const getProvincesList = () => {
  return provinces;
};

/**
 * 根据省份value获取城市列表
 * @param value
 * @param type
 * @returns {*}
 */
export const getCitiesListByProvincesValue = (value, type) => {
  if (type === "label") {
    // eslint-disable-next-line no-param-reassign
    value = find(provinces, item => item.label === value)?.value;
  }
  return cities.filter(item => item.parentCode === value);
};

/**
 * 根据城市value获取区县列表
 * @param value
 * @param type
 * @returns {*}
 */
export const getAreasListByCitiesValue = (value, type) => {
  if (type === "label") {
    // eslint-disable-next-line no-param-reassign
    value = find(cities, item => item.label === value)?.value;
  }
  return areas.filter(item => item.parentCode === value);
}

/**
 * 获取完整省市区树
 * @returns {*}
 */
export const getRegionTree = () => {
  const areasMap = groupBy(areas, (item) => item.parentCode);
  const cityMap = groupBy(cities.map(item => ({
    ...item,
    children: areasMap[item.value]
  })), (item) => item.parentCode);
  return provinces.map(item => ({
    ...item,
    children: cityMap[item.value]
  }));
}
