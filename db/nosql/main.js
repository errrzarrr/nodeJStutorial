let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
	if(err) 
		console.log(err);
	console.log('database created');
	db.close();
});
MongoClient.connect(url, (err, db) => {
	if(err) 
	console.log(err);
	var dbo = db.db('mydb');
	dbo.createCollection('customers', (err, res) => {
		if(err) 
			console.log(err);
		console.log('collection created');
		db.close();
	});    
});

MongoClient.connect(url, function(err, db) {
	if(err) 
	console.log(err);
	var dbo = db.db("mydb");
	var customer = 	{ name: 'Hayek', address: 'Golden st. 58'};
	dbo.collection('customers').insertOne(customer, (err, res)=>{
		if(err) 
			console.log(err);
		console.log("Inserted 1 document" );
		db.close();
	});
	var customers = [
		{ name: 'John', address: 'Highway 71'}
		,{ name: 'Peter', address: 'Lowstreet 4'}
		,{ name: 'Amy', address: 'Apple st 652'}
		,{ name: 'Hannah', address: 'Mountain 21'}
		,{ name: 'Michael', address: 'Valley 345'}
		,{ name: 'Sandy', address: 'Ocean blvd 2'}
		,{ name: 'Betty', address: 'Green Grass 1'}
		,{ name: 'Richard', address: 'Sky st 331'}
		,{ name: 'Susan', address: 'One way 98'}
		,{ name: 'Vicky', address: 'Yellow Garden 2'}
		,{ name: 'Ben', address: 'Park Lane 38'}
		,{ name: 'William', address: 'Central st 954'}
		,{ name: 'Chuck', address: 'Main Road 989'}
		,{ name: 'Viola', address: 'Sideway 1633'}
	];
	dbo.collection('customers').insertMany(customers, (err, res)=>{
		if(err) 
		console.log(err);
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});
});
/*
*/
/*
MongoClient.connect(url, (err, db) => {
	if(err)
	throw err;
	var dbo = db.db('mydb');
	dbo.collection('customers').findOne({}, (err, result) => {
		if(err)
			throw err;
		console.log(result.name);
	});
	dbo.collection('customers').find({}).toArray((err, results) => {
		if(err)
			throw err;
		console.log(results);
	});
	db.close();
});
*/

MongoClient.connect(url, (err, db) => {
	if(err)
		throw err;
	var dbo = db.db('mydb');
	/*
	dbo.collection('customers').findOne({}, (err, result) => {
		if(err)
			throw err;
		console.log(result.name);
	});
	dbo.collection('customers').find({}).toArray((err, results) => {
		if(err)
			throw err;
		//console.log(results);
		console.log(results);
	});
	*/
	const ORDER = { ASCENDING: 1, DESCENDING: -1 };
	

	const nameStartsWithRorAddressWithS = { name: /^R/i ,address: /^S/i };
	const startsWithSorH = { $or: [ { name: /^S/i }, { name: { $regex: '^H' } } ] };
	const namesInList =  { name: { $in: [ 'Hayek', 'Betty', 'Richard', 'Sandy' ] } };
	
	dbo.collection('customers').find( namesInList ).sort( {name: ORDER.ASCENDING} ).toArray((err, results) => {
		if(err)
			throw err;
		console.log(results);
	});
	db.close();
});