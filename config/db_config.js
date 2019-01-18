const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/quotify-db', { useNewUrlParser: true })
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.log(err))