# script for executing in mongo client console.

var key = {name:1};
var options = {         
	"unique" : 1
	,"name":  "nameIsUniqueAndCaseSensitive"
	,"collation" : {                 
		"locale" : "en" 
		,"strength" : 2
		,"caseLevel" : true         
	}      
};
db.products.createIndex(key, options);

