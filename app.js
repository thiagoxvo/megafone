var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

app.get('/play', function(req, res){
  io.emit('play-sound');
  res.send("Life is such!");
})

var port = process.env.PORT || 3000
http.listen(port, function(){
  console.log('listening on '+port);
});


