const http = require('http');

const server = http.createServer();


server.on('connection', function(socket) {
	console.log('New connetion...')
});


server.listen(3001);

console.log('App running.')