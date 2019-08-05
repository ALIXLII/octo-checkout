//F3 collects credit card #, expiry date, CVV, and billing zip code.

import React, { Component } from "react";

export default class form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: "",
      exp: "",
      cvv: "",
      billing: "",
      form3Completed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "credit") {
      this.state.credit = event.target.value;
    }
    if (event.target.name === "exp") {
      this.state.exp = event.target.value;
    }
    if (event.target.name === "cvv") {
      this.state.cvv = event.target.value;
    }
    if (event.target.name === "billing") {
      this.state.billing = event.target.value;
    }
  }

  handleClick() {
    if (this.state.credit && this.state.exp && this.state.cvv && this .state.billing) {
      this.setState({form3Completed: true});
    }
  }

  render() {
    if (!this.state.credit && !this.state.exp && !this.state.cvv && !this .state.billing) {
    return <div>
      <form onChange={this.handleChange}>
        Credit Card #: <input type="text" name="credit"/><br/>
        Expiry Date: <input type="text" name="exp"/><br/>
        CVV: <input type="text" name="cvv"/><br/>
        Billing Zip Code: <input type="text" name="billing"/><br/>
      </form>
      <input onClick={this.handleClick} type="submit" value="Submit"/>
    </div>;
  } else {return <div>ALL FORMS COMPLETED</div>}
  }
}
