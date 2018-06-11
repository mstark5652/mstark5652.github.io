
import * as React from "react"

import { Navigation } from "./Navigation"

const style = require("../style/main.scss")

interface AppState { hasError: boolean; }

export class AppPage extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log("error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (<p>AppPage has errors.</p>)
    }
    return (
      <main>
        <div className="header">
          <h2>Michael Stark</h2>
          <br />
          <p>Software Engineer</p>
          <p></p>
        </div>
        <Navigation />
        <div className="content">
          {this.props.children}
        </div>
      </main>
    )
  }
}