import { NextComponentType } from 'next'
import Link from 'next/link'
import { Row, Col, Avatar, Icon } from 'antd'

import './header.less'

const Header: NextComponentType = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-container-left">
                    <div className="header-container-left-avatar">
                        <Avatar icon="user"/>
                    </div>
                    <Link href="/">
                        <a className="header-container-left-link">home</a>
                    </Link>
                    <Link href="/archives">
                        <a className="header-container-left-link">archives</a>
                    </Link>
                </div>
                <div className="header-container-right">
                    <Icon style={{fontSize: '1.5rem'}} type="github" />
                </div>
            </div>
        </div>
    )
}

export default Header