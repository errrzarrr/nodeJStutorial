let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/';

var customer = 	{ name: 'Hayek', address: 'Golden st. 58'};
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

var customerInsertion = (err, res)=>{
	if(err) 
		console.log(err);
	console.log(`${res.insertedCount} documents inserted`);
};

MongoClient.connect(url, (err, db) => {
	if(err) 
		console.log(err);
	var dbo = db.db('mydb');
	dbo.createCollection('customers', (err, res) => {
		if(err) 
			console.log(err);
		console.log('collection created');
	});    
});

MongoClient.connect(url, function(err, db) {
	if(err) 
		console.log(err);
	var dbo = db.db("mydb");
	dbo.collection('customers').insertOne(customer, customerInsertion);
	dbo.collection('customers').insertMany(customers, customerInsertion);
	db.close();
});

