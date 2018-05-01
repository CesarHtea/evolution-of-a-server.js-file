const http = require('http');

const server = http.createServer(function(request, response) {
  // console.log('-------- req -----------');
  // console.log(request.url);
  // console.log('-------- req -----------');
  
  // si la pagina es la principal
  if (request.url === '/') {
  	response.write('Welcome to MUKTEK')
  	response.end()
  }

  // si la pagina es la /api
  if (request.url === '/api') {
  	response.write('You are now ready for the MUKTEK API')
  	response.end()
  }

// regresar un array si la pagina es la /api/students
  if (request.url === '/api/students') {
  	const allStudents = [{
  		id: 1, 
  		name: "Mr. R."
  	},{
  		id: 2,
  		name: "Tyler"
  	}]

  	const bodyResponse = {
  		body: {
  			data: allStudents
  		}
  	}

  	response.write(JSON.stringify(bodyResponse))
  	response.end()
  }

});

// on(name, function(socket) {})

server.listen(3000);

console.log('App running.')