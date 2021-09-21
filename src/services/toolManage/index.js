import request from '@/utils/request';

export const getSearch = (data) => request({
  url: '/api/corp/getCorpListOfPartition',
  method: 'POST',
  data
})
