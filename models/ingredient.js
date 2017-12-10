var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IngredientSchema = Schema(
	{
		name: {type: String, required: true},
		displayName: String,
		seeAlso: [{ingredient: String, plainName: String}],
		category: String,
		taste: String,
		function: String,
		season: String,
		weight: String,
		volume: String,
		techniques: String,
		tips: String,
		pairings: [{ pairing: String, displayName: String, strength: Number, deadLink: Boolean, categoryLink: Boolean }],
		affinities: [String],
		avoid: [String]
	}
);

// Virtual for ingredient's URL
IngredientSchema.virtual('url')
.get(function () {
	return '/catalog/ingredient/' + this.name;
});

// Export model
module.exports = mongoose.model('Ingredient', IngredientSchema);