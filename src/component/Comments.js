import React, { Component, Fragment } from "react";
import base from "../base";
import CommentForm from "./CommentForm";
import UserComments from "./UserComments";

export default class Comment extends Component {
  state = {
    comments: {}
  };
  componentDidMount() {
    this.ref = base.syncState("comments", {
      context: this,
      state: "comments"
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addComment = comment => {
    const comments = { ...this.state.comments };
    comments[`comment${Date.now()}`] = comment;
    this.setState({
      comments
    });
  };
  render() {
    return (
      <Fragment>
        <h2>Testimonials</h2>
        <CommentForm addComment={this.addComment} />
        <div class="w3-container">
          {Object.keys(this.state.comments).map(key => (
            <UserComments
              key={key}
              index={key}
              details={this.state.comments[key]}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}
