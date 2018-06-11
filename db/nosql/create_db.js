let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
	if(err) 
		console.log(err);
	console.log('database created');
	db.close();
});