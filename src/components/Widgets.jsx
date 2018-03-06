'use strict';


import React from 'react';
import { Link } from 'react-router';





export class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayClass = this.props.isShown ? "modal-dialog-background" : "modal-dialog-background hidden";
    return (
      <div className={displayClass}>
        <div className="modal-dialog">
          <div className="modal-dialog-header">
            <h1>{this.props.title || ""}</h1>
          </div>
          <div className="inner-wrapper">
            <p>{this.props.desc || ""}</p>
          </div>
          <div className="buttons">
            <button type="button" className="cancel">{this.props.buttonCancel || "Cancel"}</button>
            <button type="button" className="submit">{this.props.buttonSubmit || "Submit"}</button>
          </div>
        </div>
      </div>
    );
  }
}



