import React from 'react'
import Card from '../card/card'

import './postItem.less'
import Link from 'next/link'
import { ListItem } from '../../type/types'

const PostItem: React.FunctionComponent<{data: ListItem}> = ({data}) => {
    console.log(data)
    const { ctime } = data
    const date: Date = new Date(ctime)
    console.log(date.getFullYear())
    return(
        <Link href="/post/[id]" as={`post/${data.id}`}>
            <a>
                <Card hover={true}>
                    <h2>{data.title}</h2>
                    <div className="postItem-info">
                        <div>
                            <span>{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</span>
                        </div>
                    </div>
                </Card>
            </a>
        </Link>
    )
}

export default PostItem
