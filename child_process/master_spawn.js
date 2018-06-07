const fs = require('fs');
const child_process = require('child_process');

for(var i = 0; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i]);
   
    workerProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    workerProcess.stderr.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    workerProcess.on('close', (code) => {
		console.log(`Child process exited with exit code ${code}`);
	});
}