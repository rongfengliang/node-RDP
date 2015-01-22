var express=require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



server.listen(8000);

app.use("/static/",express.static(__dirname+"/static"));

app.get("/",function(req,res){
	res.sendfile(__dirname+"/index.html");
});

io.sockets.on("connection",function(socket){

  socket.on('move',function(data){
  	console.log(data);
  	io.sockets.emit('move',data);
  });

  socket.on('keyDown',function(data){
  	io.sockets.emit('keyDown',data);
  });

  socket.on('keyUp',function(data){
  	io.sockets.emit('keyUp',data);
  });

  socket.on('moveRelative',function(data){
  	io.sockets.emit('moveRelative',data);
  });

  socket.on('keyPress',function(data){
  	io.sockets.emit('keyPress',data);
  });

  socket.on('click',function(data){
  	io.sockets.emit('click',data);
  });

});