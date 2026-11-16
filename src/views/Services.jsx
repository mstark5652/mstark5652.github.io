import React from "react"

import strings from "../common/strings"

const Services = () => (
  <section className="section container" id="services" aria-labelledby="services-title">
    <h2 className="section__title" id="services-title" data-reveal>
      {strings.services.title}
    </h2>
    <ul className="services">
      {strings.services.items.map((service) => (
        <li className="services__item" key={service.title} data-reveal>
          <h3 className="services__title">{service.title}</h3>
          <p className="services__desc">{service.description}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default Services
