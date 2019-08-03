const mongoose = require("mongoose");
const schema = require("../database/index.js")

module.exports = {
  post: (req, res) => {
    console.log("this is post");
    const octoCheckout = new schema({
      form1: {
        name: "alex",
        email: "@mail"
      }
    }).save(err => {
      if (err) {
        console.log(err);
        res.send("error saving checkout!")
      }
      res.send("saved in db");
    })
  },
  get: (req, res) => {
    console.log("this is a get");
    res.send("get")
  },
  put: (req, res) => {
    console.log("this is a put");
  }
};
