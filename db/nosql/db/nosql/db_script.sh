# scripts for executing in mongo client console.

var key = {name:1};
var options = {         
	"unique" : true
	,"name":  "nameIsUniqueAndCaseSensitive"
	,"collation" : {                 
		"locale" : "en" 
		,"strength" : 2
		,"caseLevel" : true         
	}
};
db.products.dropIndex(options.name);
db.products.createIndex(key, options);

var key = {categories:1};
var options = {         
	"unique" : false 
	,"name":  "categoriesIndex"
};
db.products.dropIndex(options.name);
db.products.createIndex(key, options);


# replication: 
mongod --port 27017 --dbpath "c:\mongo_data\db" --replSet rs0.

# on mongo client:
rs.isMaster( );
rs.status();
rs.conf();

# backup
# FULL db dump, i.e all collections from all dbs. Dumps it in current dir.
mongodump 
# or mongodump --host localhost --port 27017

# dumping a specific db
mongodump --host localhost --port 27017 --db mydb

# dumping a specific collection from mydb
mongodump --host localhost --port 27017  --collection products  --db mydb

# restore
mongorestore
