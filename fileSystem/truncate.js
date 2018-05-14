var fs = require("fs");
var buffer = new Buffer.alloc(1024);
const FILE_NAME = 'input.txt';
const BYTES_TO_TRUNCATE = 10;
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

// truncate a file
console.log(`Going to open an existing file to truncate it after ${BYTES_TO_TRUNCATE} bytes`);
fs.open(FILE_NAME, FLAGS['r+'], (err, fd) => {
    if (err)
        return console.error(err);
    fs.ftruncate(fd, BYTES_TO_TRUNCATE, (err) => {
        if (err)
			console.log(err);

        fs.read(fd, buffer, buffer.length, 0, (err, bytes) => {
            if (err)
                console.log(err);
            if(bytes > 0)
                console.log(`\ttruncated file: ${buffer.slice(0, bytes).toString()}`);
        });

        fs.close(fd, (err) => {
            if (err)
                console.log(err);
            console.log("File closed successfully.");
        });
    });
});
