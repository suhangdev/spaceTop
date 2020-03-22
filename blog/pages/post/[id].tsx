import React from 'react'
import { NextPage, GetServerSideProps } from 'next';
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
import axios from 'axios';


const Post: NextPage<{data: any}> = ({data}) => {
    console.log(data)
    const router = useRouter()
    const markdown = data.content
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

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            data: await new Promise((resolve) => {
                axios(`http://127.0.0.1:7001/getPostDetail/${1}`).then((res: any) => {
                    resolve(res.data.data)
                })
            }),
        }
    }
};

export default Post