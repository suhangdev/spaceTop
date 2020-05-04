import { NextComponentType } from 'next'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GithubOutlined } from '@ant-design/icons';
import { Row, Col, Avatar } from 'antd';

import './header.less'

const Header: NextComponentType = () => {
    type page = {
        path: string
        name: string
        active:boolean
    }
    const [curPage, setCurPage] = useState<page[]>([
        { path: '/', name: 'home', active: false },
        { path: '/archives', name: 'archives', active:false }
    ]) 
    const router = useRouter()
    useEffect(() => {
        const state: page[] = curPage.map((item) => {
            if (item.path === router.pathname) {
                item.active = true
            } else {
                item.active = false
            }
            return item
        })
        setCurPage(state)
    }, [])
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-container-left">
                    <div className="header-container-left-avatar">
                        <Avatar size={48} src="//suhangdev.su.bcebos.com/avatar.png"/>
                    </div>
                    {
                        curPage.map(page => (
                            <Link href={page.path} key={page.path}>
                                <a className={`header-container-left-link ${page.active && 'header-container-left-link-active'}`}
                                >
                                    {page.name}
                                </a>
                            </Link>
                        ))
                    }
                </div>
                <div className="header-container-right" onClick={() => {
                    window.open('//github.com/suhangdev')
                }}>
                    <GithubOutlined style={{fontSize: '1.5rem', cursor: 'pointer'}} />
                </div>
            </div>
        </div>
    );
}

export default Header