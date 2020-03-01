import React from 'react'
import Card from '../card/card'

import './postItem.less'
import Link from 'next/link'

const PostItem: React.FunctionComponent<{data: any}> = ({data}) => {
    return(
        <Link href="/post/[id]" as={`post/${data}`}>
            <a>
                <Card>
                    {data}
                </Card>
            </a>
        </Link>
    )
}

export default PostItem
