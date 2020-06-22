var express = require('express'),
	http = require('http');

var hostname = "localhost";
var port = 3010;

var app = express();

app.use(function (req, res, next) {
	console.log(req.headers);
	res.writeHead(200, {
		'content-Type': 'text/html'
	});
	res.end('<html><body><h1>Hello World</h1></body></html>');
});

var server = http.createServer(app);

server.listen(port, hostname, function () {
	console.log(`Server running at http://${hostname}:${port}/`);
});
