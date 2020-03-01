import { NextPage } from 'next';
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';
import Link from 'next/link';
import Layout from '../../components/layout/layout'
import Card from '../../components/card/card'
import Creative from '../../components/creative/creative'
import RecentCard from '../../components/recentCard/recentCard'
import './post.less'


const Post: NextPage = () => {
    const router = useRouter()
    return (
        <Layout>
            <Row gutter={[24, 24]}>
                <Col xs={24} lg={16} xl={18}>
                    <Card>
                        <div>文章{router.query.id}</div>    
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