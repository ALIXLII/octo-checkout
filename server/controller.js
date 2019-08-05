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
        },
        form2: {
          line1: "",
          line2: "",
          city: "",
          state: "",
          zipcode: "",
          phoneNumber:""
        },
        form3: {
          credit: "",
          exp: "",
          cvv: "",
          billing: ""
        }
      })
    };
    if (form) {
      form.save(err => {
        if (err) {console.log(err)}
        res.send('saved')
      })
    }
  },
  get: (req, res) => {
    console.log("this is a get");
    res.send("get request")
  },
  patch: (req, res) => {
    console.log("this is a patch", req.body);
    schema.findOneAndUpdate(
      {"form1.email":req.body.email},
      {
        "form2.line1": req.body.line1,
        "form2.line2": req.body.line2,
        "form2.city": req.body.city,
        "form2.state": req.body.state,
        "form2.zipcode": req.body.zipcode,
        "form2.phoneNumber": req.body.phoneNumber,
        "form3.credit": req.body.credit,
        "form3.exp": req.body.exp,
        "form3.cvv": req.body.cvv,
        "form3.billing": req.body.billing
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
