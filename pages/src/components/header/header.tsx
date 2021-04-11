import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import './header.less'

const Header = (props: any) => {
  type page = {
    path: string
    active: boolean
    name: string
  }
  const [curPage, setCurPage] = useState<page[]>([])
  useEffect(() => {
    const state: page[] = props.routes.map((item: page) => {
      item.active = item.path === props.route.path;
      return item;
    })
    setCurPage(state)
  }, []);
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container-left">
          <div className="header-container-left-avatar">
            <Avatar size={48} src="//suhangdev.su.bcebos.com/avatar.png" />
          </div>
          {
            curPage.map(page => (
              <Link to={page.path} key={page.path} className={`header-container-left-link ${page.active && 'header-container-left-link-active'}`}>
                {page.name}
              </Link>
            ))
          }
        </div>
        <div className="header-container-right" onClick={() => {
          window.open('//github.com/suhangdev')
        }}>
          <GithubOutlined style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}

export default Header