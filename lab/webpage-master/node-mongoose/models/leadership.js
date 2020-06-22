var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var leadersSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	image: {
		type: String,
		default: ''
	},
	designation: {
		type: String,
		default: ''
	},
	abbr: {
		type: Currency,
		default: ''
	},
	description: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

var Leaders = mongoose.model('leader', leadersSchema);

module.exports = Leaders;
