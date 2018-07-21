import React, { Component, createRef } from "react";
import base from "../base";
import "../App.css";
import "w3-css/3/w3.css";
import "font-awesome/css/font-awesome.min.css";

export default class ContactForm extends Component {
  state = {
    customerMessage: {}
  };

  componentDidMount() {
    this.ref = base.syncState("customerMessage", {
      context: this,
      state: "customerMessage"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  firstnameref = createRef();
  laststnameref = createRef();
  emailref = createRef();
  phoneref = createRef();
  messageref = createRef();
  handleFirstName = () => {};
  handleSubmit = e => {
    e.preventDefault();
    const form = {
      firstName: this.firstnameref.current.value,
      lastName: this.laststnameref.current.value,
      phoneNumber: this.phoneref.current.value,
      email: this.emailref.current.value,
      message: this.messageref.current.value
    };
    const customerMessage = { ...this.state.customerMessage };
    customerMessage[`customerMessage${Date.now()}`] = form;
    this.setState({
      customerMessage
    });
    e.currentTarget.reset();
  };
  render() {
    return (
      <div className="w3-content w3-container w3-panel w3-white w3-padding-64">
        <form className="w3-center w3-text-blue" onSubmit={this.handleSubmit}>
          <FirstName firstnameref={this.firstnameref} />
          <LastName laststnameref={this.laststnameref} />
          <Email emailref={this.emailref} />
          <Phone phoneref={this.phoneref} />
          <Message messageref={this.messageref} />
          <button className="w3-button w3-block w3-section w3-blue w3-btn w3-padding">
            Send
          </button>
        </form>
      </div>
    );
  }
}

class FirstName extends Component {
  render() {
    return (
      <div className="w3-row w3-section">
        <div className="w3-col" style={{ width: "50px" }}>
          <i className="w3-xxlarge fa fa-user" />
        </div>
        <div className="w3-rest">
          <input
            className="w3-input w3-border"
            name="first"
            type="text"
            ref={this.props.firstnameref}
            placeholder="First Name"
          />
        </div>
      </div>
    );
  }
}

class LastName extends Component {
  render() {
    return (
      <div className="w3-row w3-section">
        <div className="w3-col" style={{ width: "50px" }}>
          <i className="w3-xxlarge fa fa-user" />
        </div>
        <div className="w3-rest">
          <input
            className="w3-input w3-border"
            name="last"
            type="text"
            ref={this.props.laststnameref}
            placeholder="Last Name"
          />
        </div>
      </div>
    );
  }
}

class Email extends Component {
  render() {
    return (
      <div className="w3-row w3-section">
        <div className="w3-col" style={{ width: "50px" }}>
          <i className="w3-xxlarge fa fa-envelope-o" />
        </div>
        <div className="w3-rest">
          <input
            className="w3-input w3-border"
            name="email"
            type="text"
            ref={this.props.emailref}
            placeholder="Email"
          />
        </div>
      </div>
    );
  }
}

class Phone extends Component {
  render() {
    return (
      <div className="w3-row w3-section">
        <div className="w3-col" style={{ width: "50px" }}>
          <i className="w3-xxlarge fa fa-phone" />
        </div>
        <div className="w3-rest">
          <input
            className="w3-input w3-border"
            name="phone"
            type="text"
            ref={this.props.phoneref}
            placeholder="Phone"
          />
        </div>
      </div>
    );
  }
}

class Message extends Component {
  render() {
    return (
      <div className="w3-row w3-section">
        <div className="w3-col" style={{ width: "50px" }}>
          <i className="w3-xxlarge fa fa-pencil" />
        </div>
        <div className="w3-rest">
          <textarea
            className="w3-input w3-border"
            name="message"
            type="text"
            ref={this.props.messageref}
            placeholder="Message"
          />
        </div>
      </div>
    );
  }
}
