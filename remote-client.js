/*using socket.io client*/

var xManager = require('./xEventManager.js');
var io=require("socket.io-client");

var socket=io.connect("http://localhost:8080");
//This will be the client for socket.io server whom you want to remotely controll.
socket.on("connect",function(){
	console.log("socket connected successfully with the server");
});

