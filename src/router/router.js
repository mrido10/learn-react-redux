import React, { Component } from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from '../pages/home/home'
import Page2 from '../pages/page2/page2'

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/page2' exact component={Page2} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router