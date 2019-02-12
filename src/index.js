import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './router/router';

import Home from './com/home';
import Detail from './com/detail';
import List from './com/list';


ReactDOM.render(
    <Router />,
    document.getElementById('root')
);
class index extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: [
                {
                    text: '首页',
                    path: '/home',
                    name: 'Home',
                    icon: 'home'
                }, {
                    text: '列表',
                    path: '/detail',
                    name: 'Detail;',
                    icon: 'detail'
                }, {
                    text: '列表',
                    path: '/list',
                    name: 'List;',
                    icon: 'list'
                }
            ],
            current: '/home'

        }

        // this绑定
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ item, key, keyPath }) {
        //两个问题：1、如何获取路由路径，2、如何获取history对象
        this.setState({
            current: key
        });

        // console.log(this.props.history);

        // 
        this.props.history.push(key)
    }
    componentDidMount() {

        // 利用生命周期函数来保持当前路由高亮
        // 获取当前路由（hash,history）
        let hash = window.location.hash;// 可能得到的值：/home,/list,/list/computer
        hash = hash.split('/')[1];

        this.setState({
            current: '/' + hash
        })

    }
    render() {
        return (
            <div>
                <h1>React Router路由演示</h1>
                <menu
                    mode="horizontal"
                    selectedKeys={[this.state.current]}
                    onClick={this.handleChange}
                >
                    {
                        this.state.menu.map(menu => {
                            return (
                                <menu.Item key={menu.path}>
                                    <icon type={menu.icon} />{menu.text}
                                </menu.Item>
                            )
                        })
                    }
                </menu>
                <switch>
                    <route path="/home" component={Home} />
                    <route path="/list" component={List} />
                    <route path="/detail" component={Detail} />
                    <redirect from="/" to="/home" />
                    {/* <Route path="/" component={Home} exact/> */}
                </switch>
            </div>
        )
    }
}
export default index;



serviceWorker.unregister();
