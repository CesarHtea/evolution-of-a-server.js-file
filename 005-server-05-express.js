const express = require('express')
const app = express()

const courses = [{
                  id: 1,
                  name: 'Terminal and UNIX',
                  length: '15 hours'
                }, {
                  id: 2,
                  name: 'Git and GitHub',
                  length: '15 hours'
                }, {
                  id: 3,
                  name: 'HTML + CSS Basics',
                  length: '10 hours'
                }, {
                  id: 4,
                  name: 'Introduction to JavaScript',
                  length: '15 hours'
                }, {
                  id: 5,
                  name: 'Intermediate JavaScript I',
                  length: '20 hours'
                }, {
                  id: 6,
                  name: 'Intermediate JavaScript II',
                  length: '25 hours'
                }, {
                  id: 7,
                  name: 'Node and Express.js Fundamentals',
                  length: '15 hours'
                }, {
                  id: 8,
                  name: 'React.js Fundamentals',
                  length: '25 hours'
                }];
                
app.get('/', function(req, res){
    res.send('home page')
})

app.get('/api/courses', function(req, res){
    res.send(JSON.stringify(courses))
})

app.get('/api/courses/:id', function(req, res){    const dataId = courses.map(function(item){
          console.log(item)
       if(item.id === parseInt(req.params.id)){
               res.send(item)
       }
    });
    
    res.send(JSON.stringify(dataId))})

const PORT = process.env.PORT || 3000;app.listen(PORT, function(){
    console.log(`App running in PORT: ${PORT}`)
})