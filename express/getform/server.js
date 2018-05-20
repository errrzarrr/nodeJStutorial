const express = require('express');
const app = express();
const PORT = 3333;

app.use( express.static('public') );
app.get('/index.htm', (req, resp) => {
	//console.log(`__dirname: ${__dirname}`);
	resp.sendFile(__dirname +"/"+"index.htm");
});

app.get('/process_get', (req, resp) => {
	// prepare response in JSON format
    response = {
		first_name: req.query.first_name
		,last_name: req.query.last_name
	};
	console.log( response );
	resp.end( JSON.stringify(response) );
});

var server = app.listen(PORT, () => {
	var host = server.address().address;
	console.log(`Example app listening at http://${host}:${PORT}`);
});

