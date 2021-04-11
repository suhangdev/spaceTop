import React from 'react'
import Card from '../card/card'

import './postItem.less'
import { Link } from 'umi';
import { ListItem } from '../../typing'

import { FieldTimeOutlined } from '@ant-design/icons'

import utils, { Formater } from '../../utils/utils'

const format: Formater = {
  '60s': '刚刚',
  '60m': '{nm}分钟前',
  '1d': '今天 {hh}:{mm}',
  'yesterday': '昨天 {hh}:{mm}',
  '1y': '{MM}月{DD}日',
  'xy': '{YYYY}年{MM}月{DD}日'
}

const PostItem: React.FunctionComponent<{ data: ListItem }> = ({ data }) => {
  const { ctime, title, abstract } = data
  return (
    <Link to={`post/${data.id}`}>
      <Card hover={true}>
        <h2>{title}</h2>
        <div className="postItem-info">
          <span><FieldTimeOutlined /> {utils.getPublishTime(ctime, format)}</span>
        </div>
        <div className="postItem-abstract">
          <p>{abstract}</p>
        </div>
      </Card>
    </Link>
  )
}

export default PostItem
