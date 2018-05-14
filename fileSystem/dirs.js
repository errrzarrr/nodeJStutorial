var fs = require("fs");
const DIR_PATH = './OhMyDir';

console.log(`\nCreating dir: ${DIR_PATH}`);

fs.mkdir(DIR_PATH, (err) => {
    if (err) 
       return console.error(err)
    console.log("Directory created successfully!");
});

console.log(`\nReading dir: ${DIR_PATH}`);
fs.readdir(DIR_PATH, (err, findings) => {
    if (err) 
       return console.error(err);
    findings.forEach( (found) => {
        console.log(`\t-found: ${found}`);
    });
});

console.log(`\nGoing to delete directory ${DIR_PATH}`);
fs.rmdir(`${DIR_PATH}/anotherDir`, (err) => {
    if (err) 
        return console.error(err);
});
