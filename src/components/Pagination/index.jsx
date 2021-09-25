import React, { useState } from 'react';
import './index.less';
import icon11 from '../../assets/icon11.png';
import icon12 from '../../assets/icon12.png';
import icon13 from '../../assets/icon13.png';
import icon14 from '../../assets/icon14.png';
import icon15 from '../../assets/icon15.png';
import icon16 from '../../assets/icon16.png';
import icon17 from '../../assets/icon17.png';
import icon18 from '../../assets/icon18.png';
import icon19 from '../../assets/icon19.png';
import icon20 from '../../assets/icon20.png';
import icon21 from '../../assets/icon21.png';
import { InputNumber, Select } from 'antd';

export default props => {
  const { pageInfo: { pageNumber, pageSize, totalPage }, pageData } = props;
  const [initPageSize, setPageSize] = useState(10);

  const handlePageSize = value => {
    handlePageData(1, value);
  }

  const handlePageData = (number = pageNumber, size = pageSize) => {
    pageData && pageData({pageNumber: number, pageSize: size});
  }

  const handlePressEnter = (e) => {
    const { value } = e.target;
    handlePageData(value > totalPage ? totalPage : value, initPageSize);
  }

  return (
    <div className='table-footer'>
      <div className='pagination'>
        <Select defaultValue={initPageSize} onChange={handlePageSize} options={[{label: 10, value: 10}, {label: 20, value: 20}, {label: 30, value: 30}]} />
        <span className='line' />
        <div className='pagination-btn'>
          <img src={icon11} alt="" onClick={() => handlePageData(1)} />
          <img src={icon12} alt="" onClick={() => handlePageData(pageNumber > 1 ? pageNumber - 1 : pageNumber)} />
        </div>
        <span className='line' />
        <div className='go'>
          <span>第</span>
          <InputNumber controls={false} onPressEnter={handlePressEnter} />
          <span>共{totalPage}页</span>
        </div>
        <span className='line' />
        <div className='pagination-btn'>
          <img src={icon13} alt="" onClick={() => handlePageData(pageNumber <= totalPage ? pageNumber + 1 : totalPage)}/>
          <img src={icon14} alt="" onClick={() => handlePageData(totalPage)}/>
        </div>
        <span className='line' />
        <div className='pagination-btn'>
          <img src={icon15} alt="" onClick={() => {
            setPageSize(10);
            handlePageData(totalPage, 10)
          }}/>
        </div>
      </div>
      <div className='icon'>
        <div className='icon-group'>
          <img src={icon16} alt=""/>
          <span>快剪辑</span>
        </div>
        <div className='icon-group'>
          <img src={icon17} alt=""/>
        </div>
        <div className='icon-group'>
          <img src={icon18} alt=""/>
        </div>
        <div className='icon-group'>
          <img src={icon19} alt=""/>
          <span>下载</span>
        </div>
        <div className='icon-group'>
          <img src={icon20} alt=""/>
        </div>
        <div className='icon-group'>
          <img src={icon21} alt=""/>
        </div>
        <span className='size'>100%</span>
      </div>
    </div>
  )
}
