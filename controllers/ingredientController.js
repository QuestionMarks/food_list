var Ingredient = require('../models/ingredient');
var Category = require('../models/category');
var async = require('async');

exports.index = function(req, res) {

    Ingredient.count()
      .exec(function(err, results){
        if (err) { return next(err); }
        //Successful, so render
        res.render('index', { title: 'Shopping List Home', error: err, data: results });
      });
};

// Display list of all Ingredients
exports.ingredient_list = function(req, res, next) {

  Ingredient.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_ingredients) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('ingredient_list', { title: 'Ingredient List', ingredient_list: list_ingredients });
    });
    
};

// Display detail page for a specific ingredient
exports.ingredient_detail = function(req, res, next) {

  console.log('req.params:', req.params);
  Ingredient.findOne({ 'name': req.params.name })
    .exec(function (err, detail_ingredient) {
      if (err) { return next(err); }
      //Successful, so render
      console.log('detail_ingredient', detail_ingredient);
      res.render('ingredient_detail', { ingredient: detail_ingredient });
    });
    
};