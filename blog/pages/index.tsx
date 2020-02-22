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
                <Col span={6}>
                    <Card>1231234</Card>
                </Col>
                <Col span={12}>
                    <Card>123123</Card>
                </Col>
                <Col span={6}>
                    <Card>123123</Card>
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
