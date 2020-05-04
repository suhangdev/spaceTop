import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { BrowserRouter, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import Index from "./pages/index";
import PostDetail from './components/postDetail/postDetail'
import 'antd/dist/antd.css';

const { Sider, Content } = Layout;

ReactDOM.render(
    <React.StrictMode>
        <Layout className="Layout">
            <Sider
                className="Sidebar"
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        文章列表
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>文章</Breadcrumb.Item>
                    </Breadcrumb>
                    <BrowserRouter>
                        <Route path="/" exact component={Index}></Route>
                        <Route path="/post/:id" component={PostDetail}></Route>
                    </BrowserRouter>
                </Content>
            </Layout>
        </Layout>

    </React.StrictMode>,
    document.getElementById("root")
);

