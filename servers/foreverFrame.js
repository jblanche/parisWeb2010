var sys = require('sys');
var http = require('http');

var responseText = "";

http.createServer(function (request, response) {
  
  function renderChunck(randomNumber){
    setTimeout(function(){
      randomNumber = Math.round(Math.random()*5000) ; 
      sys.puts(randomNumber);
      responseText = "<script>parent.console.log('lala')</script>";      
      response.write(responseText);
      renderChunck(randomNumber);
    }, randomNumber);
  }
  
  var randomNumber = Math.round(Math.random()*5000) ; 
  sys.puts(randomNumber);
  response.writeHead(200, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*", 'Transfer-Encoding': 'chunked'});
  renderChunck(randomNumber);
}).listen(8002);


