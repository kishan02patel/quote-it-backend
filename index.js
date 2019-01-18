const express = require('express')
const app = express()
// const { quotesController } = require('./app/controllers/quotes_controller')
require('./config/db_config')

const port = 3001

app.get('/', (req, res) => {
	res.send('Welcome to the quotify backend')
})

// app.use('/quotes', quotesController)

app.listen(port, () => console.log('Server started at port: ', port))