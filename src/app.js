'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoutes } from './components/BaseComponents.jsx';


if (typeof window !== "undefined") {
  window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
  };
}
