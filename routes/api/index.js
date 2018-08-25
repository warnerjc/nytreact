const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");

// Articles routes
router.use("/articles", articleRoutes);

// NYT routes
router.use("/nyt", nytRoutes);

module.exports = router;
