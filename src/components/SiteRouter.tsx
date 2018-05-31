
import * as React from "react";
import { Switch, Route } from 'react-router-dom';

import { IndexPage } from './IndexPage';
import { About } from './About';

import { Layout, NotFoundPage, ErrorPage } from './BaseComponents';

export class SiteRouter extends React.Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/index.html" component={IndexPage} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    );
  }
}

