import React, {useEffect, useState} from 'react';
import Crumb from '../../../components/Crumb';
import Form from '../../../components/Form';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';

export default props => {
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {dataIndex: '0'},
    {title: '用人单位', dataIndex: '1'},
    {title: '姓名', dataIndex: '2'},
    {title: '身份证', dataIndex: '3'},
    {title: '性别', dataIndex: '4'},
    {title: '所属劳务队长', dataIndex: '5'},
    {title: '从事主要工种', dataIndex: '6'},
    {title: '文化程度', dataIndex: '7'},
    {title: '联系电话', dataIndex: '8'},
    {title: '进场日期', dataIndex: '9'},
    {title: '退场日期', dataIndex: '10'},
    {title: '操作', dataIndex: '10'},
  ]

  useEffect(() => {
    setDataSource([{1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}, {1: '用人单位'}]);
  }, [])

  return(
    <>
      <Crumb {...props} />
      <Form />
      <Table columns={columns} dataSource={dataSource} />
      <Pagination />
    </>
  )
}
