
import * as React from "react"
import { Link } from "react-router-dom"
import { AboutView } from './About'
import { ProjectsView } from './Projects'

export class IndexPage extends React.Component {

  render() {
    return (
      <div className="container">
        <h2>Hello</h2>
        <AboutView />
        <ProjectsView />
      </div>
    )
  }
}