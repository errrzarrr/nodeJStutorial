const express = require('express');
const fs= require('fs');
const bodyParser = require('body-parser');
const PORT = 3333;
const FILE_NAME = 'users.json';
var app = express();

app.use(bodyParser.json()); 
app.get('/listUsers', (req, resp) => {
    fs.readFile(`${__dirname}/${FILE_NAME}`, 'utf8', (err, data) => {
        console.log( data );
        resp.end( data );    
    });
});

app.post('/addUser', (req, resp) => {
  
    fs.readFile(`${__dirname}/${FILE_NAME}`, 'utf8', (err, data) => {
        data = JSON.parse( data );

        for(propertyName in req.body) 
            data[ propertyName ] = req.body[ propertyName ];
            
        console.log(data);
      
        resp.end( JSON.stringify(data) );
    });

});

app.get('/:id', (req, resp) => {
    fs.readFile(`${__dirname}/${FILE_NAME}`, 'utf8', (err, data) => {
        data = JSON.parse( data );
        var user = data["user" + req.params.id] ;
        console.log(`querying user id #${req.params.id}:\n`, user);
        resp.end( JSON.stringify(user) );
    });
});

var server = app.listen(PORT, () => {
    var host = server.address().address;    
    console.log("Example app listening at http://%s:%s", host, PORT);
});