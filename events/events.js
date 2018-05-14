var events = require('events');
var eventEmitter = new events.EventEmitter();

var listner1 = () => console.log('\tlistner1 executed.');
var listner2 = () => console.log('\tlistner2 executed.');

// binds 'connection' with listener
eventEmitter.addListener('connection', listner1);
// also binds 'connection' with listener
eventEmitter.on('connection', listner2);

var eventListeners =
	require('events')
		.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners =
	require('events')
		.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
