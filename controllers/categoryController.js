var Ingredient = require('../models/ingredient');
var Category = require('../models/category');

var async = require('async');

// Display detail page for a specific book
exports.category_detail = function(req, res, next) {

  Category.findOne({ 'name': req.params.name })
    .exec(function (err, detail_category) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('category_detail', { title: 'Category Details', category_detail: detail_category });
    });
};
