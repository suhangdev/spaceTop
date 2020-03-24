import { NextPage } from 'next';
import Layout from '../components/layout/layout'
import { Row, Col } from 'antd';
import PostList from '../components/postList/postList'
import Creative from '../components/creative/creative'
import RecentCard from '../components/recentCard/recentCard'
import ArchivesCard from '../components/archivesCard/archivesCard'
import LinkCard from '../components/linkCard/linkCard'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { ListItem } from '../type/types';

import './index.less'

const Home: NextPage<{list: ListItem[]}> = ({list: postList}) => {
    useEffect(() => {
    }, [])
    return (
        <Layout>
            <div className="home">
                <Row gutter={[24, 24]}>
                    <Col xs={{span: 0}} md={{span: 8}} xl={{span: 6}}>
                        <Creative/>
                        <LinkCard/>
                        <Row>
                            <Col xs={{span: 24}} xl={{span: 0}}>
                                <ArchivesCard/>
                                <RecentCard/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span: 24}} md={{span: 16}} xl={{span: 12}}>
                        <PostList list={postList}/>
                    </Col>
                    <Col xs={{span: 0}} xl={{span: 6}}>
                        <ArchivesCard/>
                        <RecentCard/>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

Home.getInitialProps = async (): Promise<{list: ListItem[]}> => {
    return {
        list: await new Promise((resolve) => {
            axios('http://127.0.0.1:7001/getList').then((res: any) => {
                console.log(res.data.data)
                resolve(res.data.data.list)
            })
        }),
    }
};

export default Home;
