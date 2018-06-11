
import * as React from "react";
import { Link } from "react-router-dom";
import { About } from './About'

export class IndexPage extends React.Component {

  render() {
    return (
      <div className="container">
        <h2>Hello</h2>
        <About />
      </div>
    );
  }
}