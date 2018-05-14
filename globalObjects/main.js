/* globals objects could be modules, functions, strings and objects itself.
 * we do not need to include these objects in our app,
 * we rather can we them directly.
*/
const TIME_MS = 1000;
var printHello = () =>  console.log( 'this is run from a timeout global function:\n\t"Hello, World!"');
var t;
console.log(`file name of code being executed: ${__filename}`);
console.log(`directory name from where the curret script is being run: ${__dirname}`);
setTimeout(printHello, TIME_MS);
t = setTimeout(printHello, TIME_MS);
clearTimeout(t);

/*
setInterval(() => {console.log(`This will be repeated infinitely from a setInterval func every ${TIME_MS}ms`)}
	,TIME_MS
);
*/
process.on('exit', function(code) {
   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);
   console.log('About to exit with code:', code);
});
console.log("Program Ended");
/*
console.log(`${}`);
console.log(`${}`);
console.log(`${}`);
console.log(`${}`);
console.log(`${}`);
console.log(`${}`);
console.log(`${}`);
*/
