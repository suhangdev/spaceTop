import { NextPage } from 'next';
import Card from '../components/card/card'
import Layout from '../components/layout/layout'

const Archives: NextPage = () => {
    return (
        <Layout>
            <div className="archives">
                <Card>
                    Archives
                </Card>
            </div>
        </Layout>
    )
}

export default Archives