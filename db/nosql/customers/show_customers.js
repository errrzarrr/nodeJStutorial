let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/';

const COLLECTION = 'customers';
const ORDER = { ASCENDING: 1, DESCENDING: -1 };
const nameStartsWithRorAddressWithS = { name: /^R/i ,address: /^S/i };
const startsWithSorH = { $or: [ { name: /^S/i }, { name: { $regex: '^H' } } ] };
const namesInList =  { name: { $in: [ 'Hayek', 'Betty', 'Richard', 'Sandy' ] } };

const showFoundResults = (msg) => (err, results) => {
    if(err)
        throw err;
    console.log(`\n${msg}`);
    console.log(results);
};
MongoClient.connect(url, (err, db) => {
	if(err)
    	throw err;
    var dbo = db.db('mydb');

	dbo.collection(COLLECTION).findOne({}, showFoundResults(`find one from '${COLLECTION}':`));
  
	dbo.collection(COLLECTION).find({}).toArray(
        showFoundResults(`find many from '${COLLECTION}':`)
    );
        
    dbo.collection(COLLECTION).find( namesInList ).sort( {name: ORDER.ASCENDING} ).toArray(
        showFoundResults(`find names in List from '${COLLECTION}', order asc. by name:`)
    );

	db.close();
});
