let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/';
const COLLECTION = 'products';
var products = [
	{ id: 1, name: 'Apple' }
	,{ id: 2, name: 'Pear' }
	,{ id: 3, name: 'Cinnamon' }
]

MongoClient.connect(url, (err, db) => {
	if(err) 
		throw err;
	var dbo = db.db('mydb');

	dbo.createCollection(COLLECTION, (err, res) => {
		if(err) 
			throw err;
		console.log(`'${COLLECTION}' collection created`);
	});    

	dbo.collection(COLLECTION).insertMany(products, (err, res) => {
		if(err) 
			throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
	});

	dbo.collection(COLLECTION).find({}).toArray((err, results) => {
		if(err)
			throw err;
		console.log(results);
	});
	db.close();
});