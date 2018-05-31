import * as React from "react"
import * as ReactDOM from "react-dom"

import { BrowserRouter } from "react-router-dom"
import { SiteRouter } from "./components/SiteRouter"
import { Navigation } from "./components/Navigation"
import { AppPage } from "./components/AppPage"


ReactDOM.render(
  <BrowserRouter>
    <AppPage>
      <SiteRouter />
    </AppPage>
  </BrowserRouter>,
  document.getElementById("main")
)