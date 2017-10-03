const router = require("express").Router();
const userRoutes = require("./api");

// Book routes
router.use("/user", userRoutes);

module.exports = router;
