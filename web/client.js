const http = require('http');

const options = {
   host: 'localhost',
   port: 3333,
   path: '/index.html'
};

var dealWithResponse = (response) => {
	var body = '';
	response.on('data', (data) => {
		body += data;
	});
	response.on('end', () => {
		console.log(body);
 	});
}

var req = http.request(options, dealWithResponse)
req.end();
