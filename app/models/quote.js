const mongoose = require('mongoose')

const { Schema } = mongoose

const quotesSchema = new Schema({
	quoteText: {
		type: String,
		required: true
	},
	quoteAuthor: {
		type: String,
		required: true
	},
	tags: {
		type: [String]
	}
})

const Quote = mongoose.model('Quote', quotesSchema)

module.exports = { Quote }