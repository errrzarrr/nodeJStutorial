let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
   
    if(err)
        throw err;
    var dbo = db.db('mydb');
    var myquery = { name:'Chuck' };
    dbo.collection("customers").deleteOne(myquery, (err, obj) => {
        if(err)
			throw err;
		console.log(`${obj.deletedCount} doc. deleted`); 
	});
	myquery = { name: /^v/i };
	dbo.collection("customers").deleteMany(myquery, (err, obj) => {
        if(err)
			throw err;
		console.log(`${obj.deletedCount} doc. deleted`); 
	});

	db.close();

});