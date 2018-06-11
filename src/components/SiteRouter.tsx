
import * as React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"

import { IndexPage } from './IndexPage'

import { Layout, NotFoundPage, ErrorPage } from './BaseComponents'

export class SiteRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="*" component={IndexPage} />
        </div>
      </BrowserRouter>
    )
  }
}