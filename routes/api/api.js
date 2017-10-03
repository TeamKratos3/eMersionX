
const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/books
router.route("/create")
  .post(controller.create);
// Matches with "/api/books/:id"
router.route("/:id")
  .get(controller.findById);

module.exports = router;
