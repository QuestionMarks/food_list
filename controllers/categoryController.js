var Ingredient = require('../models/ingredient');

var async = require('async');

// Display detail page for a specific book
exports.category_detail = function(req, res, next) {

  async.parallel({
    book: function(callback) {     
        
      Book.findById(req.params.id)
        .populate('author')
        .populate('genre')
        .exec(callback);
    },
    book_instance: function(callback) {

      BookInstance.find({ 'book': req.params.id })
        //.populate('book')
        .exec(callback);
    },
  }, function(err, results) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('book_detail', { title: 'Title', book: results.book, book_instances: results.book_instance });
  });
    
};
