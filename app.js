var express = require('express');
var app = express();
var http = require('http')
var port = process.env.PORT || 5000
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

app.get('/play', function(req, res){
  io.emit('play-sound');
  res.send("Life is such!");
})

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port);