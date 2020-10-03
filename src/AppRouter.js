import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/anonymous/home'

import person from './views/member/person';
import Blog from './views/blog';
import DardTheme from './views/test/DardTheme';
import LightTheme from './views/test/LightThems';
import NotFound from './views/static_page'
import TextPage from './views/static_page/text_page'

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" name="Home" component={Home} />
                    <Route exact path="/me" name="persion" component={person} />
                    <Route exact path="/blog" name="blog" component={Blog} />
                    <Route exact path="/dark" name="blog" component={DardTheme} />
                    <Route exact path="/light" name="blog" component={LightTheme} />
                    <Route exact path="/text" name="text" component={TextPage} />
                    <Route exact path="/notfound" name="notfound" component={NotFound} />

                </Switch>
            </BrowserRouter>
        )
        }
}
export default AppRouter;