var express=require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

xManager = require('./xEventManager.js'),

server.listen(8000);

app.use("/static/",express.static(__dirname+"/static"));

app.get("/",function(req,res){
	res.sendfile(__dirname+"/index.html");
});

io.sockets.on("connection",function(socket){


});