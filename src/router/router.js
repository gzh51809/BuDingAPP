import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../com/home';
import Detail from '../com/detail';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;