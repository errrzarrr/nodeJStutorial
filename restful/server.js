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
    var existingData={};
    
    fs.readFile(`${__dirname}/${FILE_NAME}`, 'utf8', (err, dataFromFile) => {
        
        existingData = JSON.parse( dataFromFile );
        
        for(propertyName in req.body) 
            existingData[ propertyName ] = req.body[ propertyName ];
        
        console.log(existingData);
        
        var writerStream = fs.createWriteStream(FILE_NAME);
        writerStream.write(JSON.stringify(existingData), {flags:'w',encoding:'utf8', fd:null, mode:0o666, autoclose:true, start:0} );
        writerStream.end(); 

        resp.end( JSON.stringify(existingData) );
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

app.delete('/deleteUser/:id', (req, resp) => {
    fs.readFile(`${__dirname}/${FILE_NAME}`, 'utf8', (err, dataFromFile) => {
        existingData = JSON.parse( dataFromFile );
        delete existingData[`user${req.params.id}`];
        console.log(existingData);
        var writerStream = fs.createWriteStream(FILE_NAME);
        writerStream.write(JSON.stringify(existingData), {flags:'w',encoding:'utf8', fd:null, mode:0o666, autoclose:true, start:0} );
        writerStream.end(); 
        resp.end( JSON.stringify(existingData) );
        
    });
});

app.put('/addUser', (req, resp) => {

    var existingData={};
    var entriesControl = {anyExistingEntry : false, names : [] } ;
    var finalOutput;
    
    fs.readFile(`${__dirname}/${FILE_NAME}`, 'utf8', (err, dataFromFile) => {
        
        existingData = JSON.parse( dataFromFile );
        
        for(propertyName in req.body) {
            if(existingData[ propertyName ] != null || existingData[ propertyName ] != undefined ) {
                entriesControl.anyExistingEntry = true;
                entriesControl.names.push( propertyName );
            }
            else
                existingData[ propertyName ] = req.body[ propertyName ];
        } 
        
        if (entriesControl.anyExistingEntry) {
            finalOutput =
            `The following entry or entries already exists: ${entriesControl.names.join(', ')}. The whole object will be ignored.
            `+
           `Verify your payload or method, for PUT( /addUser ) is intended only for saving new entries. If your purpose is to update an existing entry, try instead POST( /addUser )`;
            
            resp.end( finalOutput );
        }
        else {
            finalOutput = existingData;
            var writerStream = fs.createWriteStream(FILE_NAME);
            writerStream.write(JSON.stringify(finalOutput), {flags:'w',encoding:'utf8', fd:null, mode:0o666, autoclose:true, start:0} );
            writerStream.end(); 
            resp.end( JSON.stringify(finalOutput) );
        }
        console.log( finalOutput );

    });

});

var server = app.listen(PORT, () => {
    var host = server.address().address;    
    console.log("RESTful app listening at http://%s:%s", host, PORT);
});