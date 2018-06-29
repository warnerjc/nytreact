const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create)

// Matches with "/api/books/:id"
router.route("/:id")
  .get(articlesController.findById)
  .delete(articlesController.remove);

module.exports = router;
