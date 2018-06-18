let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
	if(err) 
		console.log(err);
	var dbo = db.db('mydb');
	var order = {  product_id: 2, status: 1, customer_id:'' };

	dbo.createCollection('orders', (err, res) => {
		if(err) 
			console.log(err);
		console.log('collection created');
	});    
	
	dbo.collection('orders').insertOne(order, (err, res)=>{
		if(err) 
			console.log(err);
		console.log("Inserted 1 document" );
	});
	

	dbo.collection('orders').find().toArray((err, results) => {
		if(err)
			throw err;
		console.log(results);
	});

	db.close();
});