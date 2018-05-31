
import * as React from "react"

import { Navigation } from "./Navigation"

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
      return <p>AppPage has errors.</p>
    }
    return (
      <main>
        <Navigation />
        {this.props.children}
      </main>
    );
  }
}