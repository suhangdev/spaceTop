import React, { useState } from 'react'
import { Row, Col } from 'antd';
import Layout from '@/components/layout/layout'
import Card from '@/components/card/card'
import Creative from '@/components/creative/creative'
import { useRequest } from 'ahooks';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

import './Detail.less'

const Post = (props: any) => {
  const [data, setData] = useState<{ content: string, title: string }>({ title: '', content: '' });
  useRequest(async () => {
    await fetch(`http://192.168.1.4:7001/post/${props.match.params.id}`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      setData(res.data)
    })
  });
  if (!data?.content) return null;
  const markdown = data?.content;
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
    <Layout routes={props.routes} route={props.route}>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16} xl={18}>
          <Card>
            <h1 className="postTitle">{data.title}</h1>
            <div className='postContent' dangerouslySetInnerHTML={{ __html: html }}></div>
          </Card>
        </Col>
        <Col xs={0} lg={8} xl={6}>
          <Creative />
        </Col>
      </Row>
    </Layout>
  )
}

export default Post;