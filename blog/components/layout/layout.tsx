import { NextPage } from 'next';
import Header from '../header/header'

import './layout.less'

const Layout = (props: any) => {
    return (
        <div>
            <Header></Header>
            <div className="layout">
                {props.children}
            </div>
        </div>
    )
}

export default Layout