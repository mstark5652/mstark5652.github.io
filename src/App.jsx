import React from "react"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Hero from "./views/Hero"
import Services from "./views/Services"
import Work from "./views/Work"
import Contact from "./views/Contact"
import useReveal from "./hooks/useReveal"

const AppContainer = () => {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default AppContainer
