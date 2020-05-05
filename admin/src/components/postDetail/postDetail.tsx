import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './postDetail.less'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

interface Post {
    abstact: string
    content: string
    ctime: number 
    id: number 
    tags?: string|null
    title: string
}

const PostDetail = (props: any) => {
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer,
        gfm: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: (code) => {
            return hljs.highlightAuto(code).value
        }
    })
    const { match: {params: {id}} } = props
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [pre, setPre] = useState<string>('')
    useEffect(() => {
        axios(`http://127.0.0.1:7001/getPostDetail/${id}`).then((res: any) => {
            const { title, content } = res.data.data
            setTitle(title)
            setContent(content)
            setPre(marked(content))
        })
    }, [id])

    const handleChange = (e: any) => {
        setContent(e.target.value)
        setPre(marked(e.target.value))
    }
    return (
        <div className="postDetail">
            <div className="postDetail-header">
                <input type="text" value={title} className="postDetail-header-title" placeholder="请输入标题"/>
                <div className="postDetail-header-opt">
                    <div className="postDetail-header-opt-save">暂存</div>
                    <div className="postDetail-header-opt-release">发布</div>
                </div>
            </div>
            <div className="postDetail-editor">
                <textarea className="postDetail-editor-input" value={content || ''} onChange={handleChange} />
                <div className="postDetail-editor-view" dangerouslySetInnerHTML={{__html: pre}}></div>
            </div>
        </div>
    )
}

export default PostDetail