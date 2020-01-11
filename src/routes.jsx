import React from 'react'
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'

import IndexView from './views/IndexView'

const routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path='/'
        component={IndexView}
      />
      <Redirect to='/' />
    </Switch>
  </Router>
)

export default routes
