import React from 'react'
import PostItem from '../postItem/postItem'

import './postList.less'

const PostList: React.FunctionComponent<{list: any}> = ({list}) => {
    return (
        <div>
            {list.map((item: any, index: number) => (
                <PostItem key={index} data={item}/>
            ))}
        </div>
    )
}

export default PostList