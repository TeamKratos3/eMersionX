
const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/create")
  .post(controller.create);

router.route("/:id")
  .get(controller.findById);

module.exports = router;
