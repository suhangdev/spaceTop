import React from 'react'
import Card from '../card/card'

import './postItem.less'
import Link from 'next/link'
import { ListItem } from '../../type/types'

import { FieldTimeOutlined } from '@ant-design/icons'

import utils, {Formater} from '../../utils/utils'

const format: Formater = {
    '60s': '刚刚',
    '60m': '{nm}分钟前',
    '1d': '今天 {hh}:{mm}',
    'yesterday': '昨天 {hh}:{mm}',
    '1y': '{MM}月{DD}日',
    'xy': '{YYYY}年{MM}月{DD}日'
}

const PostItem: React.FunctionComponent<{data: ListItem}> = ({data}) => {
    const { ctime, title, abstract } = data
    return(
        <Link href="/post/[id]" as={`post/${data.id}`}>
            <a>
                <Card hover={true}>
                    <h2>{title}</h2>
                    <div className="postItem-info">
                        <span><FieldTimeOutlined /> {utils.getPublishTime(ctime, format)}</span>
                    </div>
                    <div className="postItem-abstract">
                        <p>{abstract}</p>
                    </div>
                </Card>
            </a>
        </Link>
    )
}

export default PostItem
