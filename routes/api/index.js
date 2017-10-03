const router = require("express").Router();
const userRoutes = require("./api");

// Book routes
router.use("/users", userRoutes);

module.exports = router;
