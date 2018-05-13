// chaining is a mechanism whereby the output of a stream is connected to another stream and create a chain of multiple stream operations. Usually used with piping operations.

var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('input.txt')
    .pipe( zlib.createGzip() )
    .pipe( fs.createWriteStream('input.txt.gz') );
console.log("File Compressed.");

