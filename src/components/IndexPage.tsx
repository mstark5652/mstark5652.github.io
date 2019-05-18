
import * as React from "react"
import { Link } from "react-router-dom"
import { AboutView } from './About'
import { ProjectsView } from './Projects'

export class IndexPage extends React.Component {

  render() {
    return (
      <div className="app-container">
        <br />
        <AboutView />
        <ProjectsView />
      </div>
    )
  }
}