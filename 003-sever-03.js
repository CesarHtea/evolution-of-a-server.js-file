const fs = require('fs')
const express = require('express')
const app = express()

// request.url === '/'
app.get('/', function(req, res) {
  fs.readFile(`${__dirname}/index.html`, 'utf-8', function(error, content) {
  	res.send(content)
  })  
})

app.get('/api/students', function(req, res) {
  res.send('All students')
})

app.get('/api/students/:student', function(req, res) {
	res.send(`Student ${req.params.student}`)
})

// en node hicimos:
// server.listen(3000)
// console.log()
// process.env.PORT = 5000
const PORT = process.env.PORT || 3000;

app.listen(3000, function() {
  console.log(`App running in PORT: ${PORT}`)
})