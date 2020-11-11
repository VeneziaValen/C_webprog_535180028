var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'Text/Plain'});

    response.end('Hello World Server \n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:/8081/');