import React from 'react';
import './index.less';
import logo from '../../assets/logo.svg';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

export default () => {
  return (
    <div className="header-container">
      <div className="title">
        <img src={logo} />
        <span>上海市住房和城乡建设管理委员会网上政务大厅</span>
      </div>
      <div className="crumb">
        <div className="position">
          <img src={icon1} alt="" />
          <span>当前项目：新建生产及辅助用房项目008</span>
        </div>
        <div className="user">
          <div className="info">
            <img src={icon2} alt="" />
            <span className="username">昵称：修改</span>
            <span>用户名称：罗的</span>
          </div>
          <div className="outlogin">
            <img src={icon3} alt="" />
            <span>退出</span>
          </div>
        </div>
      </div>
    </div>
  );
};
