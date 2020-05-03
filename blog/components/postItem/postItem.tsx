import React from 'react'
import Card from '../card/card'

import './postItem.less'
import Link from 'next/link'
import { ListItem } from '../../type/types'

const PostItem: React.FunctionComponent<{data: ListItem}> = ({data}) => {
    console.log(data)
    return(
        <Link href="/post/[id]" as={`post/${data.id}`}>
            <a>
                <Card hover={true}>
                    <h2>{data.title}</h2>
                </Card>
            </a>
        </Link>
    )
}

export default PostItem
