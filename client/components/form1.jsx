/**collects name and email and password for account creaation */

import React, { Component } from "react";
import Form2 from './form2.jsx';

export default class form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      form1Completed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    //console.log('?', event.target.value, event.target.name)
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

  handleClick() {
    if (this.state.name && this.state.email && this.state.password) {
      this.setState({form1Completed: true});
    }
  }

  render() {
    if (!this.state.form1Completed){
    return <div>
      <form onChange={this.handleChange}>
        Name: <input type="text" name="Name"/><br/>
        Email: <input type="text" name="Email"/><br/>
        Password: <input type="text" name="Password"/><br/>
      </form>
      <input onClick={this.handleClick} type="submit" value="Submit"/>
    </div>;
    } else {return <Form2/>}
  }
}
