import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './com/home';
import Detail from './com/detail';
import List from './com/list';
import App from './com/app';


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/list" component={List}/>
            <Route exact path="/app" component={App}/>
        </Switch>
    </HashRouter>
,
    document.getElementById('root')
);

