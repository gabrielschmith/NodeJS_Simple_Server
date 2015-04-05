var http = require('http');
var fs   = require('fs');

//This function return the 404 response
function response404(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

//This function is a Handler of user request page
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(404, {"Content-Type": "text/html"});
        fs.createReadStream('./views/index.html').pipe(response);
    } else {
        response404(response);
    }
}

//This function start the server
function server (port) {
    port = port || 8888;

    http.createServer(onRequest).listen(port);
    console.log("Starting server on port: " + port + "...");
}

// Export Module with server function
module.exports.runServer = server;