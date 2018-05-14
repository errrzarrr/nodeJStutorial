var fs = require("fs");
var data = 'This testing file was created on: '+ new Date().toString();
var buffer = new Buffer.alloc(1024);
const FILE_NAME = 'input.txt';
const FLAGS = {
    "r"		:	"r"
    ,"r+"	:	"r+"
    , "rs"	: 	"rs"
    ,"rs+"	: 	"rs+"
    ,"w"	: 	"w"
    ,"wx"	: 	"wx"
    ,"w+"	: 	"w+"
    ,"wx+"	: 	"wx+"
    ,"a" 	: 	"a"
    ,"ax" 	: 	"ax"
    ,"ax+" 	: 	"ax+"
};
var writerStream = fs.createWriteStream(FILE_NAME);
writerStream.write(data, 'UTF8');
writerStream.end();

// Async read
fs.readFile(FILE_NAME, (error, data) => {
    if(error)
        return console.error('#sync read: '+error);
    console.log(`Async read: ${data.toString()}`);
});

// Sync read
data = fs.readFileSync(FILE_NAME);
console.log(`Sync read: ${data.toString()}`);

// open a file
fs.open(FILE_NAME, FLAGS["r+"], (error, fd) => {
    if(error)
        return console.error(error);
    console.log(`file '${FILE_NAME}' opened successfully`);
});

// Get File Information
console.log("getting file info!");
fs.stat(FILE_NAME, (error, stats) => {
    if(error)
        return console.error(error);
    console.log(stats);
    console.log(`   isFile? ${stats.isFile()}`);
    console.log(`   isDirectory? ${stats.isDirectory()}`);
});

// writing a file
var data = `This file was last written at ${ (new Date()).toString() }`;
fs.writeFile(FILE_NAME, data, (error) => {
    if(error)
        return console.error(error);
    console.log("Data written successfully");
    fs.readFile(FILE_NAME, (error, data) => {
        if(error)
            return console.error(error);
        console.log(`Async read: ${ data.toString() }`);
    })
});

// reading a file using a file descriptor
console.log("\nGoing to read a file");
fs.open(FILE_NAME, FLAGS['r+'], (error, fd) => {
    if(error)
        return console.error(error);
    console.log("File opened successfully!");

    fs.read(fd, buffer, offset=0, length=buffer.length, startingPosition=0, (err, bytesRead) => {
        if (err)
            console.log(err);
        console.log(`${bytesRead} bytes read`);

        // print only read bytes to avoid junk
        if(bytesRead > 0)
            console.log( `\tcontent: ${buffer.slice(0, bytesRead).toString()} `);
    });

    // closing file
    fs.close(fd, (err) => {
        if(err)
            console.log(err);
        console.log('\nFile closed!');
    });

});

console.log("\nDeleting a file");
fs.unlink(FILE_NAME, (err) => {
    if(err)
        return console.error(err);
    console.log("File deleted successfully!");
});
