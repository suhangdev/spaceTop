import React from 'react';
import { Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import Index from "./pages/index";
import PostDetail from './components/postDetail/postDetail'
import './App.less'

const { Sider, Content } = Layout;
const App: React.FunctionComponent<{history: any}> = (props) => {
    console.log(props)
    const { history } = props
    const handleMenuClick = (e: any) => {
        if (e.key === '1') {
            history.push('/')
        }
    }
    return (
        <Layout className="Layout">
            <Sider
                className="Sidebar"
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className="logo" />
                <Menu 
                    theme="dark" 
                    mode="inline" 
                    defaultSelectedKeys={['1']}
                    onClick={handleMenuClick}
                >
                    <Menu.Item key="1">
                        文章列表
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={
                    { 
                        margin: '0 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        padding: '16px 0'
                    }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>文章</Breadcrumb.Item>
                    </Breadcrumb>
                    <Route path="/" exact component={Index}/>
                    <Route path="/post/:id" component={PostDetail}/>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App