const dns = require('dns');
const HOSTNAME = 'www.google.com';

var onLookup = (err, address, familiy) => {
	console.log(`${HOSTNAME} address: ${address}`);
	dns.reverse(address, (err, hostnames) => {
		if(err)
			console.log(err.stack);
		console.log(`reverse for ${address} : ${JSON.stringify(hostnames)}`);
	});
};

dns.lookup(HOSTNAME, onLookup);
