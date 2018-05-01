// este archivo va dentro de la carpeta API Router

const Router = require('express').Router;
const apiRouter = Router()

const courses = [{
  id: 1,
  name: "Introduction to JavaScript",
  length: "15 hours"
}, {
  id: 2,
  name: "React.js Fundamentals",
  length: "25 hours"
}];

const instructors = [{
  id: 1,
  name: "Mr R"
}, {
  id: 2,
  name: "Tyler"
}, {
  id: 3,
  name: "John Die"
}];

const students = [{
  id: 1,
  name: "Damian Allende"
}, {
  id: 2,
  name: "Cesar Hernandez"
}, {
  id: 3,
  name: "Ingrid Garcia"
}, {
  id: 4,
  name: "Maribel Navia"
}];

// GET     /api/courses
apiRouter.get('/courses', (req, res) => {
  res.json(courses)
})

// POST    /api/courses
apiRouter.post('/courses', (req, res) => {
  res.send('Making a POST request')
})

// PUT     /api/courses/{id}
apiRouter.put('/courses/:courseId', (req, res) => {
  res.send(`Making a PUT request on course endpoint with id: ${req.params.courseId}`)
})

// DELETE  /api/courses/{id}
apiRouter.delete('/courses/:courseId', (req, res) => {
  res.send(`Making a DELETE request on course endpoint with id: ${req.params.courseId}`)
})

// GET     /api/courses/{id}
// filter if necessary
  apiRouter.get('/courses/:courseId', (req, res) => {
    const courseId = parseInt(req.params.courseId)
    const newList = courses.filter(function(course) {
  	  return course.id === courseId 
    })

    res.json(newList)
  })


// GET     /api/instructors
apiRouter.get('/instructors', (req, res) => {
  res.json(instructors)
})

// POST    /api/instructors
apiRouter.post('/instructors', (req, res) => {
  res.send('Making a POST request')
})

// DELETE  /api/instructors/{id}
apiRouter.delete('/courses/:instructorId', (req, res) => {
  res.send(`Making a DELETE request on instructors endpoint with id: ${req.params.instructorId}`)
})

// GET     /api/instructors/{id}
apiRouter.get('/courses/:instructorId', (req, res) => {
  res.json(courses)
// filter if necessary
  apiRouter.get('/courses/:instructorId', (req, res) => {
    const courseId = parseInt(req.params.courseId)
    const newList = courses.filter(function(instructor) {
  	  return instructor.id === instructorId 
    })

    res.json(newList)
  })
})


// GET     /api/students
apiRouter.get('/students', (req, res) => {
  res.json(students)
})

// GET     /api/students/{id}
apiRouter.get('/courses/:studentId', (req, res) => {
  res.json(courses)
// filter if necessary
  apiRouter.get('/courses/:studentId', (req, res) => {
    const courseId = parseInt(req.params.studentId)
    const newList = courses.filter(function(student) {
  	  return student.id === studentId 
    })

    res.json(newList)
  })
})

// POST    /api/students	
apiRouter.post('/students', (req, res) => {
  res.send('Making a POST request')
})

module.exports = apiRouter