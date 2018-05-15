var net = require('net');
const PORT = 3333;
var client = net.connect({port: PORT}, () => {
   console.log('connected to server!');
});
client.on('data', (data) => {
   console.log('data from server:\n', data.toString());
	client.end();
});
client.on('end', () => {
   console.log('disconnected from server');
});

console.log(`bufferSize:	${client.bufferSize}`);
console.log(`remoteAddress:	${client.remoteAddress}`);
console.log(`remoteFamily:	${client.remoteFamily}`);
console.log(`remotePort:	${client.remotePort}`);
console.log(`localAddress:	${client.localAddress}`);
console.log(`remotePort:	${client.remotePort}`);
console.log(`localPort:		${client.localPort}`);
console.log(`bytesRead:		${client.bytesRead}`);
console.log(`bytesWritten:	${client.bytesWritten}`);
