const mysql = require('mysql');

const config = require('./mysql_config');
var con = mysql.createConnection(config.connectionConfig);

con.connect((err) => {
	if (err) 
		throw err;
	console.log("Connected!");
	/*	
	con.query(config.TABLE_CREATION.customers, function (err, result) {
	  if (err) throw err;
	  console.log("Table created");
	});
	con.query(config.DDL.alter_customers,  (err, result) => {
		if (err) console.log(err);
		console.log("Table altered");
	});
	con.query(config.DML.INSERT.customers.multi.preparedQuery,  [config.DML.INSERT.customers.multi.values],  (err, result) => {
		if (err) throw err;
		console.log(`${result.affectedRows} records inserted`);
		console.log(result);
	});
	
	con.query(config.DML.SELECT.customers.all, (err, result, fields) => {
		if (err) throw err;
		console.log(result);
	});
	con.query(config.DML.SHOW_REPEATED_ENTRIES.customers, (err, result, fields) =>{
		if (err) throw err;
		console.log(`showing: ${fields.map(f => f.name).join(' | ')} :`);
		result.forEach(row => console.log(`${row.name}\t|\t${row.address}\t|\t${row.times}`));
	});
	con.query(config.DML.INSERT.customers.single,  ['John Pattitucci', 'Jazz ave. 78'], (err, result) => {
		if (err) throw err;
		console.log(`${result.affectedRows} records inserted with id: ${result.insertId}`);
		console.log(result);
	});  
	*/
	console.log('');
	con.query(config.DML.SHOW_REPEATED_ENTRIES.customers_with_id, (err, result, fields) => {
		if (err) throw err;
		result.forEach(row => {
			console.log( fields.map( field => row[field.name] ).join('\t') );
			/* also:
			var out ='';
			fields.forEach( field => out += `${row[field.name]}\t` );
			console.log(out);
			*/
	});	
	console.log();
	con.query(config.DML.SELECT.customers.withFavProduct, (err, result, fields) => {
		if (err) throw err;
		result.forEach(row => {
			console.log( fields.map( field => row[field.name] ).join('\t') );
		});	

	});
	console.log();
	con.query(config.DML.SELECT.favorite_product, (err, result, fields) => {
		if (err) throw err;
		result.forEach(row => {
			console.log( fields.map( field => row[field.name] ).join('\t') );
		});	
	});

	});
});
  