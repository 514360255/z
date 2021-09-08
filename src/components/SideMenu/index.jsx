import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Menu} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import { history } from 'umi';

export default (props) => {
  const { headerComponent, routes = [], defaultActive, footerComponent } = props;

  const [active, setActive] = useState(defaultActive);

  useEffect(() => {
    setActive(defaultActive);
  }, [defaultActive]);

  const routerItemClick = (item) => {
    history.push(item.route);
    setActive(item.route);
  };

  return (
    <div className={styles.wrapper}>
      <div>{headerComponent}</div>
      <Menu selectedKeys={[active]} mode="inline" className={styles.menuContent}>
        {routes.map((item) => (
          <Menu.Item
            key={item.route}
            onClick={() => routerItemClick(item)}
            icon={<PlusCircleOutlined />}
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
      <div className={styles.footer}>
        {footerComponent}
      </div>
    </div>
  );
};
