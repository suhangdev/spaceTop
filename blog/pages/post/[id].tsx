import { NextPage } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Layout from '../../components/layout/layout'


const Post: NextPage = () => {
    const router = useRouter()
    return (
        <Layout>
            <div>文章{router.query.id}</div>
        </Layout>
    )
}

export default Post