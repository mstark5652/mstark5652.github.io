import React from "react"

import strings from "../common/strings"

const Nav = () => (
  <header className="nav">
    <div className="container nav__inner">
      <a className="nav__name" href="/">
        {strings.name}
      </a>
      <nav aria-label="Primary">
        <ul className="nav__links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a className="button button--small" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Nav
