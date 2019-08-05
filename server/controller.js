const mongoose = require("mongoose");
const schema = require("../database/index.js")

module.exports = {
  post: (req, res) => {
    console.log("this is a post", req.body.form);
    var form;
    if (req.body.form === "form1") {
      form = new schema({
        form1: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        }
      })
    };
    if (form) {
      form.save(err => {
        if (err) {console.log(err)}
        res.send('saved')
      })
    }
    // const octoCheckout = new schema({
    //   form1: {
    //     name: "alex"
    //   }
    // }).save(err => {
    //   if (err) {
    //     console.log(err);
    //     res.send("error saving checkout!")
    //   }
    //   res.send("saved in db");
    // })
  },
  get: (req, res) => {
    console.log("this is a get");
    res.send("get request")
  },
  patch: (req, res) => {
    console.log("this is a patch");
    schema.findOneAndUpdate(
      "form1",
      {
        "form1.name": "alex",
        "form1.email": "email"
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
