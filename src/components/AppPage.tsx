
import * as React from "react"

import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { Lens } from "./Lens"

// leave for bundle
const style = require("../style/main.scss")

const pano = "public/dist/" + require("../img/pano_mountain.jpg") //"https://s3.us-east-2.amazonaws.com/static-serving/pano_mountain.jpg"
import { SPOTS } from "../helper"

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
          <Lens src={pano} infospots={SPOTS} />
        </div>
        <Navigation />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </main>
    )
  }
}