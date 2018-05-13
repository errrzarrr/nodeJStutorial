
/* There are 4 types of streams:
 * Readable, Writable, Duplex, Transform
 * Each type of Stream is an EventEmitter instance and throws several 
 * events at different instance of times
 * The most common are: data, end, error and finish
*/

var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

// handle stream events
readerStream.on('data', (chunk) => data += chunk );
readerStream.on('end', () => console.log( data ) );
readerStream.on('error', (error) => console.log( error.stack ) );

console.log("Program Ended");