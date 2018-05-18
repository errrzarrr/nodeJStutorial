const express = require("express");
const PORT = 3333;
const FILE_ATTACHED = './img/Jörmungandr_GoW2018.jpg';
var app = express();
app.use( express.static('public') );

app.get('/', (request, response) => {

	//	console.log('request', request);
	//	console.log('response', response);

	console.log(`ip: ${request.ip}`);
	console.log(`protocol: ${request.protocol}`);
	console.log(`secure?  ${request.secure}`);
	console.log(` fresh?${request.fresh} or stale?${request.stale}`);
	console.log(`subdomains:  ${request.subdomains}`);
	console.log(`path:  ${request.path}`);
	console.log(`route:`,  request.route);
	console.log(`query:`, request.query);
	console.log(`params:`, request.params);
	console.log(`content-type: ${request.get('Content-Type')} `);
	console.log(`is text/plain? ${request.is('text/plain')} `);
	console.log(`“X-Requested-With” : “XMLHttpRequest” ? ${request.xhr}`);

	console.log(`\nresponse:`);
	console.log(`app: ${response.app}`);
	console.log(`headersSent? ${response.headersSent}`);
	console.log(`locals: `, response.locals);
	response.append('Warning', '199 Miscellaneous warning');
	response.append('X-Powered-By', 'My RESTful API');
	response.cookie('myCart', {itemsID: [1,2,3] });
	response.attachment( FILE_ATTACHED );
	response.download( FILE_ATTACHED );
	response.send('Hello World');
});


app.post('/', (req, resp) => {
	console.log('Got post request');
	resp.send('hello POST');
});

app.delete('/delUser', (req, resp) => {
	console.log('got a DELETE request for /delUser');
	resp.send('Hello DELETE');
});

app.get('/listUser', (req, resp) => {
	console.log('got a GET request for /listUser');
	resp.send('Listing users');
});

app.get('/ab*cd', (req, resp)=>{
	console.log("Got a GET request for /ab*cd");
	resp.send("Got a GET request for /ab*cd");
});

var server = app.listen(PORT, () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
	return "";
}
