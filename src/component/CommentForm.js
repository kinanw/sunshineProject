import React, { Component, createRef } from "react";
const uuid = require("uuid");
export default class CommentForm extends Component {
  commentRef = createRef();
  handleSubmit = e => {
    e.preventDefault();
    alert(new Date().format("m-d-Y h:i:s"));
    const comment = {
      text: this.commentRef.current.value,
      id: uuid.v4(),
      createdt: Date.now()
    };
    this.props.addComment(comment);
    e.currentTarget.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              className="w3-input"
              placeholder="Add a Testimonial"
              ref={this.commentRef}
              type="text"
            />
          </p>
          <button>Post</button>
        </form>
      </div>
    );
  }
}
