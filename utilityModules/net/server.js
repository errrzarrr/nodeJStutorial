const net = require('net');
const os = require("os");
const PORT = 3333;
var server  = net.createServer((connection) =>{
	console.log('client connected');
	connection.on('end', () => {
		console.log('client disconnected');
	});
	connection.on('error', (error) => {
		console.log('error has occurred:\n\t'+ error);
	});
	connection.setTimeout(2000);
	connection.on('timeout', () => {
		console.log('server timeout: idle connection for too long');
		connection.end('server timeout: idle connection for too long');
	});
	connection.on('close'
		,(had_error) => console.log('closed: had error? '+had_error)
	);
	connection.pipe(connection);
	connection.write('Hello world');
});
server.listen(PORT, () => {
	console.log('server is listening on port '+PORT);
});
