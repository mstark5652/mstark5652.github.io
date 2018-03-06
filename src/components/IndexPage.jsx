'use strict';


import React from 'react';
import { Link } from 'react-router';

import { SimpleModal } from './Widgets.jsx';
import { Helper } from '../helper';

export class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};

  }
  
  render() {
    return (
      <div className="container">
        <h2>Michael Stark</h2>
      </div>
    );
  }
}




