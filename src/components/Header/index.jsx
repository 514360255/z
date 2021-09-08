import React from 'react';
import './index.less';
import logo from '../../assets/logo.svg';

export default () => {
  return(
    <div className='header-container'>
      <div className="title">
        <img src={logo} />
        <span>上海市住房和城乡建设管理委员会网上政务大厅</span>
      </div>
      <div className="crumb">

      </div>
    </div>
  )
}
