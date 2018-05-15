var os = require("os");

console.log(`default dir for temp files: ${os.tmpdir()}`);
console.log(`CPU's endianness: ${os.endianness()}`);
console.log(`hostname: ${os.hostname()}`);
console.log(`name: ${os.type()}`);
console.log(`platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Release: ${os.release()}`);
console.log(`Uptime (secs): ${os.uptime()}`);
console.log(`Load avg: ${os.loadavg()}`);
console.log(`Total mem (bytes): ${os.totalmem()}`);
console.log(`free memory (bytes): ${os.freemem()}`);
console.log(`cpus:`, os.cpus());
console.log(`networkInterfaces:`, os.networkInterfaces());
console.log(`End-of-line marker ${JSON.stringify(os.EOL)} : ${os.EOL}` );
