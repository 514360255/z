import React from 'react';
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

export default props => {
  return (
    <div className='table-footer'>
      <div className='pagination'>
        <select name="10">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <span className='line' />
        <div className='pagination-btn'>
          <img src={icon11} alt=""/>
          <img src={icon12} alt=""/>
        </div>
        <span className='line' />
        <div className='go'>
          <span>第</span>
          <input type="text"/>
          <span>共6页</span>
        </div>
        <span className='line' />
        <div className='pagination-btn'>
          <img src={icon13} alt=""/>
          <img src={icon14} alt=""/>
        </div>
        <span className='line' />
        <div className='pagination-btn'>
          <img src={icon15} alt=""/>
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
