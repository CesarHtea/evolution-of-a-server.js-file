const http = require('http');

const server = http.createServer(function(request, response) {

  // si la pagina es la principal
  if (request.url === '/') {
    response.write('Home page')
    response.end()
  }

  // si la pagina es /about
  if (request.url === '/about') {
    response.write('About page')
    response.end()
  }

  // si la pagina es /api/products
  if (request.url === '/api/products') {
    const products = {
      data: [{
        id: 1,
        name: 'Cookies',
        price: '12.39'
      }, {
        id: 2,
        name: 'Halls',
        price: '9.88'
      }, {
        id: 3,
        name: 'Orange Juice',
        price: '20.00'
      }]
    };

    const bodyResponse = {
      body: {
        data: products
      }
    }

    response.write(JSON.stringify(bodyResponse))
    response.end()
  }

  // si la pagina es /api/orders
  if (request.url === '/api/orders') {
    const orders = {
      data: [{
        id: 1,
        date: '04-01-2018',
        products: [{
          id: 2,
          name: 'Halls',
          quantity: 2
        }, {
          id: 1,
          name: 'Cookies',
          quantity: 1
        }],
        total: '25.00'
      }, {
        id: 2,
        date: '04-09-2018',
        products: [{
          id: 1,
          name: 'Cookies',
          quantity: 4
        }],
        total: '26.78'
      }]
    };

    const bodyResponse = {
      body: {
        data: orders
      }
    }

    response.write(JSON.stringify(bodyResponse))
    response.end()
  }

});

server.listen(3000);

console.log('App running.')