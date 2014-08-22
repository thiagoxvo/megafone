var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('underscore');

var sounds = [{
  name : "sadtrombone",
  file : "sad_trombone.mp3"
}];

var getSoundFile = function(sound){
  return _.findWhere(sounds, {name : sound}).file;
};

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

app.get('/play/:sound', function(req, res) {
  var fileName = getSoundFile(req.params.sound);
  console.log(fileName);
  io.emit('play', {fileName : fileName });
  res.send("Playing... " + fileName);
});


var port = process.env.PORT || 3000
http.listen(port, function(){
  console.log('listening on '+port);
});


