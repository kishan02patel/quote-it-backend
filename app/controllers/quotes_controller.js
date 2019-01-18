const express = require('express')
const router = express.Router()
const { Quote } = require('../models/quote')
router.use(express.json())

router.get('/', (req, res) => {
	Quote.find()
		.then((response) => {
			res.send(response)
		})
		.catch((err) => {
			res.send(err)
		})
})

router.post('/add', (req, res) => {
	const quote = new Quote(req.body)
	quote.save()
		.then((response) => {

			res.send(response)
		})
		.catch((err) => {
			res.send(err)
		})
})

module.exports = {
	quotesController: router
}