import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';
import Link from 'next/link';
import Layout from '../../components/layout/layout'
import Card from '../../components/card/card'
import Creative from '../../components/creative/creative'
import RecentCard from '../../components/recentCard/recentCard'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

import './post.less'


const Post: NextPage = () => {
    const router = useRouter()
    const markdown = '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
     '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '```typescript\n\n' +
    'var a=11; \n\n' +
    '```' 
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        breaks: false,
        smartLists: true,
        highlight: (code) => {
            return hljs.highlightAuto(code).value
        }
    })
    const html = marked(markdown) 
    return (
        <Layout>
            <Row gutter={[24, 24]}>
                <Col xs={24} lg={16} xl={18}>
                    <Card>
                        <div>文章{router.query.id}</div>
                        <div dangerouslySetInnerHTML={{__html: html}}></div>   
                    </Card>
                </Col>
                <Col xs={0} lg={8} xl={6}>
                    <Creative/>
                    <RecentCard/>
                </Col>
            </Row>
        </Layout>
    )
}

export default Post