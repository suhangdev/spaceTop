import React, {useState, useEffect} from 'react'
import axios from 'axios'

interface Post {
    abstact: string
    content: string
    ctime: number 
    id: number 
    tags?: string|null
    title: string
}

const PostDetail = (props: any) => {
    const { match: {params: {id}} } = props
    const [info, setInfo] = useState<Post>({
        abstact: '',
        content: '',
        ctime: Date.now(),
        id: 1,
        title: '',
    })
    const [showPost, setShowPost] = useState<boolean>(false)
    useEffect(() => {
        axios(`http://127.0.0.1:7001/getPostDetail/${id}`).then((res: any) => {
            setInfo(res.data.data)
            setShowPost(true)
        })
    }, [showPost])
    return (
        <div>
            {showPost && <div>
                <div>{info.title}</div>
                <div>{info.ctime}</div>
                <div>{info.content}</div>
            </div>}
        </div>
    )
}

export default PostDetail