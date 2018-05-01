const express = require('express')
const app = express()

const apiRouter = require('./routes/apiRouter')

app.use('/api', apiRouter)

app.listen(3000, () => {
	console.log('App running...')
})