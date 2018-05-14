var fs = require("fs");
var data;
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

// Async read
fs.readFile(FILE_NAME, (error, data) => {
    if(error)
        return console.error(error);
    console.log(`Async read: ${data.toString()}`);
});

// Sync read
data = fs.readFileSync(FILE_NAME);
console.log(`Sync read: ${data.toString()}`);
console.log("Program Ended\n");

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
    console.log(`   isDirectory ${stats.isDirectory()}`);
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

// truncate a file
console.log("\nGoing to open an existing file to truncate it after 10 bytes");
fs.open(FILE_NAME, FLAGS['r+'], (err, fd) => {
    if (err) 
        return console.error(err);
    fs.ftruncate(fd, 10, (err) => {
        console.log('at truncate func');
        if (err)
			console.log(err);
			
        fs.read(fd, buffer, buffer.length, 0, (err, bytes) => {
            if (err)
                console.log(err);
            if(bytes > 0)
                console.log(`\ttruncated file: ${buffer.slice(0, bytes).toString()}`);
        });
        // Close the opened file.
        fs.close(fd, (err) => {
            if (err)
                console.log(err);
            console.log("File closed successfully.");
        });
    });
});

//
console.log("\nDeleting a file");
fs.unlink(FILE_NAME, (err) => {
    if(err)
        return console.error(err);
    console.log("File deleted successfully!");
});