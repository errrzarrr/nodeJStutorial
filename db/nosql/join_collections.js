// MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.
// orders.product_id -> product.id


let MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017/';
const MAIN_COLLECTION = 'orders';
lookupCriteria =[
    { $lookup: {
        from: 'products'
        ,localField: 'id'
		,foreignField: 'product_id'
		,as: 'productsInOrder'
} } ];

MongoClient.connect(url, (err, db) => {
	if(err) 
		console.log(err);
    var dbo = db.db('mydb');
    dbo.collection(MAIN_COLLECTION).aggregate(lookupCriteria).toArray( (err, res)=>{
        if(err)
            throw err;
        console.log( JSON.stringify(res) );
    });
    db.close();
});