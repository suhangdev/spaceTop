import React from 'react'
import Card from '../card/card'
import './creative.less'

import { EnvironmentOutlined } from '@ant-design/icons'

const Creative: React.FunctionComponent = () => {
    const handleFollowClick = () => {
        window.open('https://github.com/suhangdev')
    }
    return (
        <Card>
            <div className="creative">
                <img className="creative-avatar" src="//suhangdev.su.bcebos.com/avatar.png"/>
                <div className="creative-name">suhangdev</div>
                <div className="creative-profession">Web Developer</div>
                <div className="creative-location">
                    <EnvironmentOutlined className="creative-location-icon" />
                    <span>中国 浙江 杭州</span>
                </div>
                <div className="creative-follow" onClick={handleFollowClick}>
                    <span>Follow</span>
                </div>
            </div>
        </Card>
    )
}

export default Creative