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
      form: "form1",
      complete: false
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
    if (this.state.name && this.state.email && this.state.password) {
      postData("/api/db", this.state)
      .then(res => {
        //return res.json();
        return res.json()
      })
      .then(res => {
        console.log(res);
        if (res) {
          this.setState({complete: true})
        } else {
          alert("This email already exists!")
        }
      })
    } else {
      alert("Incomplete!")
    }
  }

  render() {
    if (!this.state.complete){
    return <div>
      <form onChange={this.handleChange}>
        Name: <input type="text" name="Name"/><br/>
        Email: <input type="text" name="Email"/><br/>
        Password: <input type="text" name="Password"/><br/>
      </form>
      <input onClick={this.handleClick} type="submit" value="Submit"/>
    </div>;
    } else {return <Form2 email={this.state.email}/>}
  }
}
