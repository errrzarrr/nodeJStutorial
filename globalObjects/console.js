console.info("Program Started");

var counter = 10;
var TIMES = 10000;
var TIMER_LABEL = 'Getting data'
console.log("Counter: %d", counter);

console.time(TIMER_LABEL);
console.log(`Will do a process ${TIMES*TIMES} times`);
for(i = 0; i<=TIMES; i++) {
	for(j = 0; j<=TIMES; j++) {
	}
}
console.timeEnd(TIMER_LABEL);

console.info("Program Ended");
