import React from 'react';
import icon4 from '../../assets/icon4.png';
import './index.less';

export default props => {
  const { route: { crumbName } } = props;
  return(
    <>
      <div className='g-crumb'>
        <img src={icon4} alt=""/>
        <span>{crumbName}</span>
      </div>
    </>
  )
}
