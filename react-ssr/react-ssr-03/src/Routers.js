import React from 'react';
import {Route} from 'react-router-dom';
import Home from './containers/Home/index';
import Login from './containers/Login/index';

export default (
    <div>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
    </div>
)
