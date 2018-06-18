let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
	if(err) console.log(err);
	var dbo = db.db('mydb');
	var nameStartsWithV = {name: /^v/i};
	var myquery = { address: 'Canyon 124'};
	var newValues = {$set: {name: 'Michael M.', address:  'Valley 345'} };
	
	dbo.collection('customers').updateOne(myquery, newValues, (err, res) => {
		if(err) console.log(err);
		console.log(res.result);
	});
	
	newValues = {$set: { address:  'Horlim House 333'} };
	dbo.collection('customers').updateMany(nameStartsWithV, newValues, (err, res) => {
		if(err) console.log(err);
			console.log(res.result);
	});
	db.close( () => console.log('db conn closed') );
});
