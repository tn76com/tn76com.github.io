 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 require('mongoose-currency').loadType(mongoose);
 var Currency = mongoose.Types.Currency;

 var promoSchema = new Schema({
 	name: {
 		type: String,
 		required: true,
 		unique: true,
 	},
 	image: {
 		type: String,
 		default: ''
 	},
 	label: {
 		type: String,
 		default: ''
 	},
 	price: {
 		type: Currency
 	},
 	description: {
 		type: String,
 		required: true
 	}
 }, {
 	timestamps: true
 });

 var Promoes = mongoose.model('Promo', promoSchema);

 module.exports = Promoes;
