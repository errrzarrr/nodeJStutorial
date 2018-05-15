var path = require('path');
var os = require("os");

const FILE_NAME = 'main.js';
const FULL_PATH = path.resolve(FILE_NAME);

console.log('normalized path : ' + path.normalize('/test/test1//2slashes/1slash/tab/..') );
console.log('join path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..') );
console.log('resolve path: '+ path.resolve(FILE_NAME) );
console.log(`${FILE_NAME} isAbsolute? ` +path.isAbsolute(FILE_NAME) ); 
console.log(`${FULL_PATH} isAbsolute? ` +path.isAbsolute(FULL_PATH) ); 
console.log(`extname: ${path.extname(FILE_NAME)}`);
console.log(`relative: ${path.relative(from='D:\\PROJECTS\\nodeJStutorial\\utilittyModules\\path\\', to='D:\\PROJECTS\\nodeJStutorial\\streams\\pipingStreams.js' )}`);
console.log(`dirname : ${path.dirname(FULL_PATH)}`);
console.log(`basename: ${path.basename(FULL_PATH)}`);
console.log(`parse:`, path.parse(FULL_PATH) );
console.log(`format (a path string from a path object):`, path.format( path.parse(FULL_PATH) ) ); 

console.log('path constants: ');
console.log(`\tsep: ${path.sep}`);
console.log(`\tdelimeter ${path.delimiter}`);
console.log(`\tposix:`, path.posix);
console.log(`\twin32:`, path.win32);

