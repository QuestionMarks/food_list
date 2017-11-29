var express = require('express');
var router = express.Router();

// Require controller modules
var ingredient_controller = require('../controllers/ingredientController');
var category_controller = require('../controllers/categoryController');


/// INGREDIENT ROUTES ///

/* GET catalog home page */
router.get('/', ingredient.index);

/* GET request for one Ingredient. */
router.get('/ingredient/:id', ingredient.ingredient_detail);

/* GET request for list of all Ingredient items. */
router.get('/ingredients', ingredient.ingredient_list);

/// CATEGORY ROUTES ///

/* GET request for one Category. */
router.get('/category/:id', category.category_detail);

module.exports = router;