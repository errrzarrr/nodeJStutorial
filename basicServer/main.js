var http = require("http");
var fs = require('fs');

const PORT = 3333;
const STATUS_OK = 200;
const CONTENT_TEXT_PLAIN ={'Content-Type': 'text/plain'};
const FILE_NAME = 'price.txt'

http.createServer( (request, response) => {

	response.writeHead(STATUS_OK, CONTENT_TEXT_PLAIN);
	response.end(`Today's dollar price is ${ getDollarPriceSync() } [RD$]`);
	getDollarPriceAsync();

}).listen(PORT);

var getDollarPriceSync = () => {
	var data = fs.readFileSync( FILE_NAME );
	return data.toString().trim();
}

var getDollarPriceAsync = () => {
	fs.readFile(FILE_NAME, (error, data) => {
		if(error)
			return console.error(error);
		console.log( data.toString().trim() );
	});
	// won't wait for file to be completely read to reach this point
	console.log('async reading ended');
}

console.log(`nodetest.js running on  http:\/\/127.0.0.1:${PORT}`);
