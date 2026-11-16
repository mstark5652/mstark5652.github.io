import strings from "../common/strings"

const Footer = () => (
  <footer className="footer container">
    <span>
      © {new Date().getFullYear()} {strings.name} ·{" "}
      <a href={strings.company.href}>{strings.company.name}</a>
    </span>
  </footer>
)

export default Footer
