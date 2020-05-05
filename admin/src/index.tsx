import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import "./index.less";
import 'antd/dist/antd.css';

import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Route path="/*" exact component={App}></Route>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

