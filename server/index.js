const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const router = require("./routes");

const port = 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname + "/dist")));

app.use("/api", router);

app.listen(port, () => {
  console.log("the server is connected on " + port);
});
