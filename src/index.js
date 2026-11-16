import React from "react"
import { createRoot } from "react-dom/client"
import AppContainer from "./App"

// leave - used for including styles in build
import "./styles/main"

if (typeof window !== "undefined") {
  window.onload = () => {
    createRoot(document.getElementById("main")).render(<AppContainer />)
  }
}
