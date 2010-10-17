var sys = require('sys');
var http = require('http');

var responseText = "Hello World";
var lastResponseTime =  new Date();

http.createServer(function (request, response) {
    var randomNumber = Math.random() ; 
    response.writeHead(200, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*"});
    if(randomNumber > 0.5){
      responseText = lastResponseTime.toString() ; 
      lastResponseTime = new Date();
      response.write(responseText);
    }
    else{
      response.write(responseText);
    }
    response.end('<br />\n');
}).listen(8000);