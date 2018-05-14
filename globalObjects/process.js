// Printing to console
process.stdout.write("Hello process" + "\n");
// Reading passed parameter
console.log("arguments : [");
process.argv.forEach((val, index, array) => console.log('\t'+index + ': ' + val));
console.log("]\n");


console.log('execPath: '+process.execPath);

console.log('platform: '+process.platform);

console.log('Current directory: ' + process.cwd());

console.log('Current version: ' + process.version);


console.log('memoryUsage: ' + JSON.stringify(process.memoryUsage()));

process.on('exit', function(code) {
	// Following code will never execute.
	setTimeout(() => console.log("This will not run"), 0);
	console.log('About to exit with code:', code);
});
