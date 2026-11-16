import React from "react"

const ArrowLink = ({ href, children }) => (
  <a className="arrow-link" href={href}>
    {children}
    <svg className="arrow-link__icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  </a>
)

export default ArrowLink
