import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from 'bundle-loader?lazy&name=Home!pages/Home';
import Couter from 'bundle-loader?lazy&name=Couter!pages/Couter';
import Counter from 'bundle-loader?lazy&name=Counter!pages/Counter';
import UserInfo from 'bundle-loader?lazy&name=UserInfo!pages/UserInfo';
import Bundle from "./Bundle";

const Loading = function () {
    return <div>Loading...</div>
}
const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props}/> : <Loading/>
        }
    </Bundle>
)
const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/couter">计数页</Link></li>
                <li><Link to="/counter">计数页1</Link></li>
                <li><Link to="/userInfo">请求个人信息</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/couter" component={createComponent(Couter)}/>
                <Route path="/counter" component={createComponent(Counter)}/>
                <Route path="/userInfo" component={createComponent(UserInfo)}/>
            </Switch>
        </div>
    </Router>
)
export default getRouter
