var Category = require('../models/category');
var async = require('async');

exports.index = function(req, res) {   
    
    // async.parallel({
    //     book_count: function(callback) {
    //         Book.count(callback);
    //     },
    //     book_instance_count: function(callback) {
    //         BookInstance.count(callback);
    //     },
    //     book_instance_available_count: function(callback) {
    //         BookInstance.count({status:'Available'}, callback);
    //     },
    //     author_count: function(callback) {
    //         Author.count(callback);
    //     },
    //     genre_count: function(callback) {
    //         Genre.count(callback);
    //     },
    // }, function(err, results) {
    //     res.render('index', { title: 'Local Library Home', error: err, data: results });
    // });

    Ingredient.count()
      .exec(function(err, results)){
        if (err) { return next(err); }
        //Successful, so render
        res.render('index', { title: 'Shopping List Home', error: err, data: results });
      }
};

// Display list of all Ingredients
exports.ingredient_list = function(req, res, next) {

  Ingredient.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_books) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('book_list', { title: 'Book List', book_list: list_books });
    });
    
};

// Display detail page for a specific ingredient
exports.ingredient_detail = function(req, res, next) {

  async.parallel({
    ingredient: function(callback) {     
        
      Ingredient.findById(req.params.id)
        .populate('author')
        .populate('genre')
        .exec(callback);
    },
    book_instance: function(callback) {

      IngredientInstance.find({ 'ingredient': req.params.id })
        //.populate('book')
        .exec(callback);
    },
  }, function(err, results) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('ingredient_detail', { title: 'Title', book: results.book, book_instances: results.book_instance });
  });
    
};