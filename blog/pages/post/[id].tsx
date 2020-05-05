import React from 'react'
import { NextPage, GetServerSideProps } from 'next';
import { Row, Col } from 'antd';
import Layout from '../../components/layout/layout'
import Card from '../../components/card/card'
import Creative from '../../components/creative/creative'
import RecentCard from '../../components/recentCard/recentCard'

import axios from 'axios';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

import './post.less'


const Post: NextPage<{data: any}> = ({data}) => {
    const markdown = data.content
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
    const html = marked(markdown) 
    return (
        <Layout>
            <Row gutter={[24, 24]}>
                <Col xs={24} lg={16} xl={18}>
                    <Card>
                        <h1 className="postTitle">{data.title}</h1>
                        <div className='postContent' dangerouslySetInnerHTML={{__html: html}}></div>   
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

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    console.log(query)
    return {
        props: {
            data: await new Promise((resolve) => {
                axios(`http://127.0.0.1:7001/getPostDetail/${query.id}`).then((res: any) => {
                    resolve(res.data.data)
                })
            }),
        }
    }
};

export default Post