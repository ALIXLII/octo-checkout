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
  }
  render() {
    return <div>
      <form action="/form2.jsx">
        Name: <input type="text" name="Name" value="Alex"/><br/>
        Email: <input type="text" name="Email" value="alex@email.com"/><br/>
        Password: <input type="text" name="Password" value=""/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>;
  }
}
