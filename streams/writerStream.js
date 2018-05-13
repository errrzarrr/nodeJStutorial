var fs = require('fs');
var data = "Simply easy learning";

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end(); // marks the EOF

writerStream.on('finish', () => console.log("Write completed.") );
writerStream.on('error', (error) => console.log(error.stack) );

console.log("Program Ended");