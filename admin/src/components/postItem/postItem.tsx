import React from 'react'
import { ListItem } from '../../../type/types'
import utils, { Formater } from '../../common/js/utils'
import { FieldTimeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

import './postItem.less'

const format: Formater = {
    '60s': '刚刚',
    '60m': '{nm}分钟前',
    '1d': '今天 {hh}:{mm}',
    'yesterday': '昨天 {hh}:{mm}',
    '1y': '{MM}月{DD}日',
    'xy': '{YYYY}年{MM}月{DD}日'
}

const PostItem: React.FunctionComponent<{ data: ListItem }> = ({ data }) => {
    const { title, ctime, abstract, id } = data
    return (
        <Link to={`/post/${id}`}>
            <div className="postItem" >
                <h2>{title}</h2>
                <div className="postItem-info">
                    <span><FieldTimeOutlined /> {utils.getPublishTime(ctime, format)}</span>
                </div>
                <div className="postItem-abstract">
                    <p>{abstract}</p>
                </div>
            </div>
        </Link>
    )
}

export default PostItem
