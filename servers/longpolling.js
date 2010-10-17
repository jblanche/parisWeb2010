var sys = require('sys');
var http = require('http');

var responseText = "Hello World";

http.createServer(function (request, response) {
    var randomNumber = Math.round(Math.random()*5000) ; 
    response.writeHead(200, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*"});
    setTimeout(function(){
        response.write(randomNumber.toString());
        response.end('<br />\n');
    }, randomNumber);
}).listen(8001);