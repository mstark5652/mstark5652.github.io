import React from "react"

import strings from "../common/strings"

const Contact = () => (
  <section className="container" id="contact" aria-labelledby="contact-title">
    <div className="contact" data-reveal>
      <h2 className="contact__title" id="contact-title">
        {strings.contact.title}
      </h2>
      <p className="contact__body">{strings.contact.body}</p>
      <div className="contact__actions">
        <a className="button button--inverse" href={strings.contact.mailto}>
          {strings.contact.cta}
        </a>
        {strings.links
          .filter(({ label }) => label !== "Email")
          .map(({ label, href }) => (
            <a className="contact__link" key={label} href={href}>
              {label}
            </a>
          ))}
      </div>
    </div>
  </section>
)

export default Contact
