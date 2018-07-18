import React, { Component } from "react";
import Comment from "./Comments";

export default class Home extends Component {
  render() {
    return (
      <div className="w3-content w3-container w3-panel w3-white w3-padding-64">
        <h1>Home, Sweet home!</h1>
        <Comment />
      </div>
    );
  }
}
