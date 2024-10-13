const { Router } = require("express")

const MovieTagsController = require("../controllers/MovieTagsController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const movieTagsRoutes = Router();

const movieTagsController = new MovieTagsController();

movieTagsRoutes.get("/", ensureAuthenticated, movieTagsController.index);

module.exports = movieTagsRoutes;