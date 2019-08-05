/**collects name and email and password for account creaation */

import React, { Component } from "react";
import Form2 from './form2.jsx';
import {postData} from '../functions';

export default class form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      form: "form1"
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
    this.setState({form: "form1"})
    console.log(this.state)
    postData("/api/db", this.state)
  }

  render() {
    if (!this.state.name || !this.state.email || !this.state.password){
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
