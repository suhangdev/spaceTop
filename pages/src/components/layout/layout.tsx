import React from 'react';
import Header from '../header/header';
import styles from './layout.less';
import '../../assets/common.less';

const Layout = (props: any) => {
  return (
    <div className={styles['global-box']}>
      <Header routes={props.routes} route={props.route} />
      <div className={styles.layout}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout