const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 3333;
const CONTENT_TYPE_HTML = {'Content-Type': 'text/html'};

http.createServer( (request, response) => {
	var pathname = url.parse(request.url).pathname;
	console.log(`Request for ${pathname} received`);
	console.log(` ${pathname} received`);
	console.log(`pathname.substr(1): `, pathname.substr(1));
	fs.readFile(pathname.substr(1), (err, data)=>{
		if(err) {
			console.log(err);
			response.writeHead(404, CONTENT_TYPE_HTML);
		} else {
			response.writeHead(200, CONTENT_TYPE_HTML);
			response.write( data.toString() );
		}
		response.end();
	});
}).listen( PORT );
console.log(`Server running at http:\/\/127.0.0.1:${PORT}\/`);
