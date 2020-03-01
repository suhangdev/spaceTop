import { NextPage } from 'next';
import Link from 'next/link'
import Layout from '../components/layout/layout'
import Card from '../components/card/card'
import { Row, Col } from 'antd';

import './index.less'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout>
        <div className="home">
            {/* <Link  href="/post/[id]" as={`post/${123}`}>
                <a>post</a>
            </Link> */}
            <Row gutter={[24, 24]}>
                <Col xs={{span: 0}} md={{span: 8}} xl={{span: 6}}>
                    <Card>111111</Card>
                    <Row>
                        <Col xs={{span: 24}} xl={{span: 0}}>
                            <Card>333333</Card>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{span: 24}} md={{span: 16}} xl={{span: 12}}>
                    <Card>222222</Card>
                    <Card>222222</Card>
                    <Card>222222</Card>
                </Col>
                <Col xs={{span: 0}} xl={{span: 6}}>
                    <Card>333333</Card>
                </Col>
            </Row>
        </div>
    </Layout>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;
