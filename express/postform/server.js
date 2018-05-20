const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3333;
const INDEX_HTM = '/index.htm';

var urlencodedParser = bodyParser.urlencoded( {extended : false} );
app.use( express.static('public') );

app.get(INDEX_HTM, (req, resp) => {
	resp.sendFile( __dirname+INDEX_HTM );
});

app.post('/process_post', urlencodedParser, (req, resp) => {
	var response = {
		first_name: req.body.first_name
		,last_name: req.body.last_name
	};
	console.log( response );
	resp.end( JSON.stringify(response) );
});

var server = app.listen(PORT, () => {
	var host = server.address().address;
	console.log(`Example app listening at http://${host}:${PORT}`);
});