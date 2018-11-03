import * as React from "react"


export class Footer extends React.Component<object, object> {
  render() {
    return (
      <footer>
        <div id="contact" className="anchor"></div>
        <div className="row m0 social-links">
          <ul className="nav">
            <li className="wow fadeInUp" data-wow-delay="0.0s"><a href="https://github.com/mstark5652" target="_blank"><i className="fa fa-github"></i></a></li>
            <li className="wow fadeInUp" data-wow-delay="0.1s"><a href="https://www.instagram.com/m.stark5652/" target="_blank"><i className="fa fa-instagram"></i></a></li>
            <li className="wow fadeInUp" data-wow-delay="0.2s"><a href="https://www.linkedin.com/in/michael-stark-8b650280" target="_blank"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div className="menu-rights">
          <ul className="nav footer-menu">
          </ul>
          <p>Michael Stark</p>
          <br />
          <p><a href="mailto:mstark5652@gmail.com" title="Email"><i className="fa fa-envelope">&nbsp;&nbsp;</i>mstark5652@gmail.com</a></p>
        </div>
      </footer>
    )
  }
}
