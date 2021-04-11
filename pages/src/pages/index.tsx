import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import { Row, Col } from 'antd';
import { useRequest } from 'ahooks';
import Creative from '@/components/creative/creative';
import LinkCard from '@/components/linkCard/linkCard';
import ArchivesCard from '@/components/archivesCard/archivesCard';
import RecentCard from '@/components/recentCard/recentCard';
import PostList from '@/components/postList/postList';

export default (props: any) => {
  const [postList, setPostList] = useState([]);
  useRequest(async () => {
    await fetch('http://192.168.1.4:7001/post')
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      setPostList(res.data)
    })
  });
  return (
    <Layout routes={props.routes} route={props.route}>
      <div className="home">
        <Row gutter={[24, 24]}>
          <Col xs={{ span: 0 }} md={{ span: 8 }} xl={{ span: 6 }}>
            <Creative />
            <LinkCard />
            <Row>
              <Col xs={{ span: 0 }} xl={{ span: 0 }}>
                <ArchivesCard />
                <RecentCard />
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 16 }} xl={{ span: 18 }}>
            <PostList list={postList} />
          </Col>
          <Col xs={{ span: 0 }} xl={{ span: 0 }}>
            <ArchivesCard />
            <RecentCard />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
