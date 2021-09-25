import request from '@/utils/request';

export const getSearch = (params) => request({
  url: '/api/corp/getCorpListOfPartition',
  method: 'GET',
  params
})
