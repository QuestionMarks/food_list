var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = Schema(
	{
		name: {type: String, required: true},
		items: [{type: String, required: true}]
	}
);

// Virtual for book's URL
CategorySchema.virtual('url')
.get(function () {
	return '/catalog/category/' + this.name;
});

// Export model
module.exports = mongoose.model('Category', CategorySchema);