
import * as React from "react"

const githubLogo = "public/dist/" + require("../img/github.svg")

export class Navigation extends React.Component {
  
  componentDidMount() {
    window.onscroll = function (): void { stickyNav() };

    let navbar = document.getElementById("navbar") as HTMLElement;
    let sticky = navbar.offsetTop;

    function stickyNav(): void {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }

  render() {
    return (
      <div id="navbar">
        <a className="active" href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a className="nav-right logo" href="https://github.com/mstark5652"><img src={githubLogo} alt="Github logo" /></a>
        <a className="nav-right name" href="#">Michael Stark</a>
      </div>
    );
  }
}