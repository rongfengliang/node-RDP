/*using socket.io client*/

var xManager = require('./xEventManager.js');
var io=require("socket.io-client");

var socket=io.connect("http://localhost");
//This will be the client for socket.io server whom you want to remotely controll.
socket.on("connect",function(){
	console.log("socket connected successfully with the server");
});

xManager.createXManager(function(manager) {

	socket.on('move', function(data) {
	        try{manager.move(data.xPercent, data.yPercent);}
	        catch(err){}
			});	
	socket.on('moveRelative', function(data) {
	        try{manager.moveRelative(data.x, data.y);}
	        catch(err){}
			});
	socket.on('keyUp', function(data){
	        try{manager.keyUp(data.key);}
	        catch(err){}
			});
	socket.on('keyDown', function(data){
	        try{manager.keyDown(data.key);}
	        catch(err){}
			});
	socket.on('keyPress', function(data){
	        try{manager.keyPress(data.key);}
	        catch(err){}
			});
	socket.on('click', function(data){
	        try{manager.click(data.clickCode);}
	        catch(err){}
			});
});