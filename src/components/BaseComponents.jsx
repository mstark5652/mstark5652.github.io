'use strict';

import React from 'react';
import { Router, browserHistory, Link } from 'react-router';

import routes from '../routes';

class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
    );
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}




// Error Pages


class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h2>404</h2>
        <h4>Page not found!</h4>
        <br/><br/>
        <Link src="/">Return home</Link>
      </div>
    );
  }
}


class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error-page">
        <h4>Something went wrong! Please try again later.</h4>
        <br/><br/>
        <Link src="/">Return home</Link>
      </div>
    );
  }
}


export {
    AppRoutes,
    Layout,
    NotFoundPage,
    ErrorPage
}

