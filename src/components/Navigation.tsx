
import * as React from "react"

const githubLogo = "public/dist/" + require("../img/github.svg")
const linkedInLogo = "public/dist/" + require("../img/linkedin.svg")

interface NavState {
  activePage?: string
}

export class Navigation extends React.Component<object, NavState> {

  constructor(props: object) {
    super(props)
    this.state = {
      activePage: "" + window.location.hash.replace('#', '').toLowerCase()
    }
  }
  
  componentDidMount() {
    window.onscroll = function (): void { stickyNav() };

    let navbar = document.getElementById("navbar") as HTMLElement;
    let sticky = navbar.offsetTop + 90;

    function stickyNav(): void {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

  }

  pageState(val: string) {
    this.setState({
      activePage: val
    })
  }

  render() {
    return (
      <div id="navbar">
        <a className={(this.state.activePage == "" || this.state.activePage == "home") ? "active" : ""} onClick={() => this.pageState("home")} href="#">Home</a>
        <a className={(this.state.activePage == "about") ? "active" : ""} onClick={() => this.pageState("about")} href="#about">About</a>
        <a className={(this.state.activePage == "projects") ? "active" : ""} onClick={() => this.pageState("projects")} href="#projects">Projects</a>
      </div>
    );
  }
}