import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './com/home';
import Detail from './com/detail';
import App from './com/App';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/App" component={Detail}/>
        </Switch>
    </HashRouter>
);




ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

export default BasicRoute;