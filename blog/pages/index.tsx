import { NextPage } from 'next';
import Link from 'next/link'
import Layout from '../components/layout/layout'
import {Button} from 'antd'

import './index.less'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout>
        <div className="home">
            {/* <h1 className="home">Hello world! - user agent: {userAgent}</h1> */}
            <Button>我是按钮</Button>
            <Link  href="/post/[id]" as={`post/${123}`}>
                <a>post</a>
            </Link>
        </div>
    </Layout>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;
