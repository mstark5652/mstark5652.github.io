'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Layout, NotFoundPage } from './components/BaseComponents.jsx';
import { IndexPage } from './components/IndexPage.jsx';


const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="*" component={IndexPage} />
  </Route>
);

export default routes;