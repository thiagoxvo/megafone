var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 5000
// var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

app.get('/play', function(req, res){
  // io.emit('play-sound');
  res.send("Life is such!");
})

var server = http.createServer(app)
server.listen(port)


// wss.on("connection", function(ws) {
//   var id = setInterval(function() {
//     ws.send(JSON.stringify(new Date()), function() {  })
//   }, 1000)

//   console.log("websocket connection open")

//   ws.on("close", function() {
//     console.log("websocket connection close")
//     clearInterval(id)
//   })
// })