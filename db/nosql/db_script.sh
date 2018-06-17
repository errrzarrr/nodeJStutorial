# script for executing in mongo client console.

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
