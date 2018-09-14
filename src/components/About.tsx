
import * as React from "react";
import { Link } from "react-router-dom";

export class AboutView extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div id="about" className="anchor"></div>
        <p className="section-title">About</p>
        <p className="about-desc">
          Experienced Developer with a demonstrated history of working in the marketing and advertising industry.
          Skilled in mobile, nlp, and text classification, with a great interest in learning/creating new things.
          Strong engineering professional with a Bachelor of Science (BS) focused in Computer Science from University of Central Missouri.
        </p>
        <br />
        <br />
      </div>
    );
  }
}