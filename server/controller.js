const mongoose = require("mongoose");
const schema = require("../database/index.js")

module.exports = {
  post: (req, res) => {
    console.log("this is a post");
    const octoCheckout = new schema({
      form1: {
        name: "alex",
        email: "@mail",
        password: "****"
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
  patch: (req, res) => {
    console.log("this is a patch");
    schema.findOneAndUpdate(
      "form1",
      {
        "form1.name": "bob",
        "form1.email": "sdkhfksdh"
      },
      {new: true},
      (err, doc) => {
        if (err) {
          console.log("error patching")
        }
        console.log(doc)
        res.send("db patched")
      }
    )
  }
};
