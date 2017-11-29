var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IngredientSchema = Schema(
	{
		name: {type: String, required: true},
		category: {type: String, required: false},
		taste: {type: String, required: false},
		season: {type: String, required: false},
		weight: {type: String, required: false},
		volume: {type: String, required: false},
		techniques: {type: String, required: false},
		tips: {type: String, required: false},
		pairings: [{ ingredient: {type: String}, strength: {type: Number} }]
	}
);

// Virtual for book's URL
IngredientSchema.virtual('url')
.get(function () {
	return '/catalog/ingredient/' + this._id;
});

// Export model
module.exports = mongoose.model('Ingredient', IngredientSchema);