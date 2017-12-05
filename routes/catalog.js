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

/// CATEGORY ROUTES ///

/* GET request for one Category. */
router.get('/category/:name', category_controller.category_detail);

module.exports = router;