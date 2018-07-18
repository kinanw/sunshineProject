import React, { Component } from "react";

export default class UserComments extends Component {
  render() {
    const { text } = this.props.details;
    return (
      <div
        className="w3-display-container w3-panel w3-round-xlarge w3-left-align w3-padding "
        style={{ minHeight: "100px" }}
      >
        <div className="w3-display-topleft w3-margin"> Top Right</div>
        <div className="w3-display-left w3-margin">
          <p>{text}</p>
        </div>
        <div className="w3-row w3-section w3-display-bottomright w3-margin">
          <div className="w3-col" style={{ width: "50px" }}>
            <i className="w3-xxlarge fa fa-hand-o-up" />
          </div>
          <div className="w3-rest">
            <i className="w3-xxlarge fa fa-hand-o-down" />
          </div>
        </div>
      </div>
    );
  }
}
