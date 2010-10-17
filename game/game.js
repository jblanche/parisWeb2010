var http = require('http'), 
		url = require('url'),
		path = require('path'),
		fs = require('fs'),
		sys = require('sys'),
		io = require('socket.io'),
    connect = require('connect');
		
var PORT = 8005;		

var server= connect.createServer(
  connect.staticProvider(__dirname + '/public')
);

server.listen(PORT);

var socket = io.listen(server);
var winner = null ; 

socket.on('connection', function(client){
  client.score = 0 ; 
  
  var response = {"_type": "connect", "client": client.sessionId} ;  
  socket.broadcast(JSON.stringify(response));
  socket.clients.forEach(function(c){
    if(c != null && c.sessionId != client.sessionId){
      var response = {"_type": "connect", "client": c.sessionId} ;  
      client.send(JSON.stringify(response));
    }
  });
  

  client.on('message', function(msg){
		switch (msg){
		  case 'up':
		    if(winner == null){
		      client.score +=  10 ; 
		      response =  {"_type": "up", "client": client.sessionId, "score": client.score} ;  
          socket.broadcast(JSON.stringify(response));
        }
        if(client.score >= 100){
          winner = client.sessionId ; 
          response =  {"_type": "winner", "client": client.sessionId} ;  
          socket.broadcast(JSON.stringify(response));
        }
        break;
      case 'new':
        winner = null ; 
        socket.clients.forEach(function(c){
          if(c != null){
            c.score = 0 ;
            var response = {"_type": "up", "client": c.sessionId, "score": c.score} ;  
            socket.broadcast(JSON.stringify(response));  
          }
        });
        break;
		}
  });
  
  client.on('disconnect', function(){
    var response = {"_type": "disconnect", "client": client.sessionId} ;  
    socket.broadcast(JSON.stringify(response));
  })
});

