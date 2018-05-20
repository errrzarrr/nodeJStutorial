const express = require('express');
const app = express();
const fs = require("fs");
const DESTINATION_DIR = './tmp/'; 
const INDEX_FILE = '/index.htm';
const bodyParser = require('body-parser');
const multer  = require('multer');
const PORT = 3333;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use( multer( {dest: DESTINATION_DIR} ).single('file') );

app.get(INDEX_FILE, (req, res) => {
   res.sendFile( `${__dirname}/${INDEX_FILE}` );
});

app.post('/file_upload', (req, res) => {
	console.log(`original name: ${req.file.originalname}`);
	console.log(`path: ${req.file.path}`);
	console.log(`mimetype: ${req.file.mimetype}`);
	console.log(`size: ${req.file.size} Bytes`);

	var file = `${__dirname}/${DESTINATION_DIR}/${req.file.originalname}`;
	console.log('file final destination: '+file);

	fs.readFile( req.file.path, (err, data) => {
		fs.writeFile(file, data, (err) => {
			if( err )
				console.log( err );
			else
				response = {
					message: 'File uploaded successfully'
					,filename: req.file.originalname
				};
			console.log( response );
			res.end( JSON.stringify( response ) );
		});
	});
});

var server = app.listen(PORT, () => {
   var host = server.address().address;
   console.log("Example app listening at http://%s:%s", host, PORT);
})