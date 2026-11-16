import React from "react"

import strings from "../common/strings"

const profile = require("../img/me.jpg")

const Hero = () => (
  <section className="hero container" aria-labelledby="hero-title">
    <div className="hero__text">
      <a className="pill" href={strings.company.href}>
        <span className="pill__dot" aria-hidden="true" />
        {strings.hero.eyebrow}
      </a>
      <h1 className="hero__title" id="hero-title">
        {strings.hero.title}
      </h1>
      <p className="hero__intro">{strings.hero.intro}</p>
      <div className="hero__actions">
        <a className="button" href={strings.contact.mailto}>
          {strings.hero.primaryCta}
        </a>
        <a className="button button--ghost" href="#work">
          {strings.hero.secondaryCta}
        </a>
      </div>
    </div>
    <div className="hero__photo">
      <img src={profile} alt={`Portrait of ${strings.name}`} width="2320" height="3088" />
    </div>
  </section>
)

export default Hero
