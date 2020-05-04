import React, {useEffect, useState} from 'react';
import axios from 'axios'

import PostItem  from '../postItem/postItem'
import { ListItem } from '../../../type/types'

const PostList: React.FunctionComponent<{}> = () => {
    const [list, setList] = useState<ListItem[]>([])
    useEffect(() => {
        axios('http://127.0.0.1:7001/getList').then((res: any) => {
            setList(res.data.data.list)
        })
    }, [])
    return (
        <div>
            {list.map((item) => (
                <PostItem data={item} key={item.id}/>
            ))}
        </div>
    )
}

export default PostList