import React from 'react';
import {Table} from "antd";
import './index.less';

export default props => {
  const { dataSource = [], columns = [], bordered = true, pagination = false } = props;
  return(
    <Table
      className='custom-table'
      scroll={{y: 'calc(100vh - 330px)'}}
      bordered={bordered}
      size="small"
      columns={columns}
      dataSource={dataSource}
      rowClassName={(record, index) => index % 2 === 1 ? 'row-color' : ''}
      pagination={pagination} />
  )
}
