var express = require('express');
var router = express.Router();

// Require controller modules
var ingredient_controller = require('../controllers/ingredientController');
var category_controller = require('../controllers/categoryController');


/// INGREDIENT ROUTES ///

/* GET catalog home page */
router.get('/', ingredient_controller.index);

/* GET request for one Ingredient. */
router.get('/ingredient/:name', ingredient_controller.ingredient_detail);

/* GET request for list of all Ingredient items. */
router.get('/ingredients', ingredient_controller.ingredient_list);

/* GET request for list of  Ingredient items starting with a given letter. */
router.get('/ingredients/:letter', ingredient_controller.ingredient_letter_list);

/// CATEGORY ROUTES ///

/* GET request for one Category. */
router.get('/category/:name', category_controller.category_detail);

/// SEARCH ROUTES ///

router.get('/search', ingredient_controller.search);

router.get('/search_results/:search', ingredient_controller.search_results);

module.exports = router;