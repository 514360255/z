import React, {useEffect, useState} from 'react';
import Crumb from '../../../components/Crumb';
import Form from '../../../components/Form';
import Table from '../../../components/Table';
import Pagination from '../../../components/Pagination';
import { getSearch } from '@/services/toolManage';
import { Button } from 'antd';

export default props => {
  const [dataSource, setDataSource] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const columns = [
    {dataIndex: 'dataIndex'},
    {title: '用人单位', dataIndex: 'employeeName'},
    {title: '姓名', dataIndex: 'name'},
    {title: '身份证', dataIndex: 'cardId'},
    {title: '性别', dataIndex: 'gender'},
    {title: '所属劳务队长', dataIndex: 'laborCaptain'},
    {title: '从事主要工种', dataIndex: 'workType'},
    {title: '文化程度', dataIndex: 'education'},
    {title: '联系电话', dataIndex: 'tel'},
    {title: '进场日期', dataIndex: 'dateEntry'},
    {title: '退场日期', dataIndex: 'dateOuted'},
    {title: '创建时间', dataIndex: 'gmtCreated'},
    {
      title: '操作',
      dataIndex: 'action',
      render: () => [
        <Button key='edit' type='link'>编辑</Button>
      ]
    },
  ];

  const getData = (pageNumber = 1, pageSize = 10) => {
    getSearch({pageNumber, pageSize}).then(res => {
      const { data, pageNumber, pageSize, totalPage } = res.data;
      data.forEach((item, index) => item.dataIndex = (index + 1) + ((pageNumber - 1) * 10));
      setPageInfo({ pageNumber, pageSize, totalPage });
      setDataSource([...data]);
    })
  }

  const pageData = (pageInfo) => {
    const { pageSize, pageNumber } = pageInfo;
    getData(pageNumber, pageSize);
  }

  useEffect(() => {
    getData();
  }, [])

  return(
    <>
      <Crumb {...props} />
      <Form />
      <Table columns={columns} dataSource={dataSource} />
      <Pagination pageInfo={pageInfo} pageData={pageData} />
    </>
  )
}
