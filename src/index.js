import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory} from 'react-router'
import {Provider} from "react-redux"

import Login from './components/login'
import SignUp from './components/signup'
import Home from './components/Home'
import Cart from './components/Cart'
import store from './store'



ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>
            <Route path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home/:userName" component={Home} />
            <Route path="/cart/:userName" component={Cart} />
    </Router>
   </Provider>,
    document.getElementById("root")
)