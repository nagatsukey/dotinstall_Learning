var http = require('http');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();

server.on('request', function(req, res) {
  res.writeHead(200, {'Cotent-Type': 'text/plain'});
  res.write('hello world');
  res.end();
});
server.listen(settings.port, settings.host);
console.log("server listening...");
