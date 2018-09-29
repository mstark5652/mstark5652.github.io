
import * as React from "react"

import { Navigation } from "./Navigation"

const style = require("../style/main.scss")

const profile = "public/dist/" + require("../img/me.jpeg")

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
          <p className="header-name">Michael Stark</p>
          <br />
          <p>Software Engineer</p>
          <br />
          <img className="main-profile" src={profile} alt="Profile Picture" title="Profile Picture" />
        </div>
        <Navigation />
        <div className="content">
          {this.props.children}
        </div>
      </main>
    )
  }
}