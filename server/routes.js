const router = require("express").Router();
const controller = require("./controller.js");

router
  .route("/db")
  .get(controller.get)
  .post(controller.post)
  .put(controller.put);

module.exports = router;
