import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/anonymous/home'

import person from './views/member/person';

class Client extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" name="Home" component={Home} />
                    <Route exact path="/me" name="persion" component={person} />

                </Switch>
            </BrowserRouter>
        )
        }
}
export default Client