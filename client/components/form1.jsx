/**collects name and email and password for account creaation */

import React, { Component } from "react";

export default class form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('?', event.target.value, event.target.name)
    if (event.target.name === "Name") {
      this.state.name = event.target.value;
    }
    if (event.target.name === "Email") {
      this.state.email = event.target.value;
    }
    if (event.target.name === "Password") {
      this.state.password = event.target.value;
    }
  }

  render() {
    return <div>
      <form onChange={this.handleChange}>
        Name: <input type="text" name="Name"/><br/>
        Email: <input type="text" name="Email"/><br/>
        Password: <input type="text" name="Password"/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>;
  }
}
