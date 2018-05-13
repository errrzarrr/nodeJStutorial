var N_OCTETS = 256;
var len;
buf = new Buffer.from( 'Testing Buffers' );
//len = buf.write();

console.log(`${buf.toString()} with length of ${len}` );

buf = new Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii') );       
console.log( buf.toString('ascii', 0, 5) );   
console.log( buf.toString('hex', 0 ,5) );    
console.log( buf.toString(undefined, 0, 5) );  // encoding defaults to 'utf8'

//JSON
buf = new Buffer.from('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

//concatenation
var buf2 = new Buffer.from(' in TutorialsPoint');
var buf3 = Buffer.concat([buf,buf2]);
console.log("buf3 content: " + buf3.toString());

//Comparing buffers
var result = buf.compare(buf3);
if(result < 0) 
    result = buf +" comes before " + buf3;
else if(result == 0)
    result = buf +" is same as " + buf3;
else 
    result = buf +" comes after " + buf3;

console.log("\tcomparation results: "+result );

// copy a buffer
buf.copy( buf2 );
console.log("buff copied content: " + buf.toString());

// slice a buffer
var slicedBuf = buf.slice(0, 5);
console.log( 'sliced buffer: ' +slicedBuf+' length now is '+ slicedBuf.length );
