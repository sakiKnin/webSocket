const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const mongoose = require('mongoose');
const socketio = require('socket.io');
const http = require('http');

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');
//Middleware

const app = express();

app.use(bodyParser.json());
app.use(cors({

	origin: '*'
}));

const server = http.createServer(app);
const io = socketio(server);

const posts = require('./routes/api/messages');
const files = require('./routes/api/files');
const loginRegister = require('./routes/api/loginRegister');
 
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('join',({name, room}, callback) =>{
	
	var user=addUser({id:socket.id, name:name, room:room})
        
        const variable = JSON.stringify(Object.values(user));
	const myObject = JSON.parse(variable)[0];

	socket.join(myObject.room);
	socket.emit('message', { user: 'admin', text: `${myObject.name} wellcom to the ${myObject.room}` });
	socket.broadcast.to(myObject.room).emit('message', {user: 'admin', text: `${myObject.name}, has joined`})
       
	const users = getUsersInRoom('app');
	var activeUsers = new Array(users.length);
	for (var i = 0; i < activeUsers.length; i++)
    		activeUsers[i] = new Array(users.length-1); 
 		
	var socketId = [];
        var i=0;
	var k=0;
	var j=0;
	 
	if(users.length===1){
			
		io.to(`${users[0].id}`).emit('users', {users: 'There is no active users in the chat room...'});
	
	}else{

	    for(i=0; i<users.length;i++){
		  socketId[i]=users[i].id;
		  for(j=0,k=0; j<users.length;j++){	
		    if(i!=j){
			activeUsers[i][k]=users[j].name;
			k++; 
		 		}
			}
			io.to(`${socketId[i]}`).emit('users', {users: `${activeUsers[i]}`});
		}
			
	}
	 
	callback();	
	 	 	
});
 
  socket.on('sendMessage', (message, callback) => {
	 
	const user = getUser(socket.id);
	if(user!=undefined){
	 	io.to(user.room).emit('message', {user:user.name, text:message})
			}
	callback();
	});  
  socket.on('isTyping', (mess, callback) => {
	 
	const user = getUser(socket.id);
	const users = getUsersInRoom('app');
		if(users.length>1){
		    var socketId = new Array(users.length);
			    for(var i=0; i<users.length; i++){
				socketId[i]=users[i].id;
				if(socketId[i]!=user.id) 
				    io.to(`${socketId[i]}`).emit('isTyping', {user: 'admin', text:`${user.name} is typing...`})
				 }
			}
		callback(); 
	});

    socket.on('disconnectLog', (message) => {
	console.log(message);
	console.log(`${socket.id}`);
        io.to(`${socket.id}`).emit('message', {user: 'admin', text: 'You have left the app, please come back soon...' });
	const user = getUser(socket.id);
	if(user!=undefined){
	removeUser(user.id);
        //io.to(`${socket.id}`).emit('message', {user: 'admin', text: 'You have left the app, please come back soon...' });
	socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} has left the app`});

	const users = getUsersInRoom(user.room);
	var i, j, k;
	var socketId = [];
	
	activeUsers = new Array(users.length);
	for(i=0; i<users.length; i++)
		activeUsers[i] = new Array(users.length-1);
	
	for(i=0; i<users.length; i++){
		socketId[i]=users[i].id;
		for(j=0, k=0; j<users.length; j++){
			if(i!=j){
		 	    activeUsers[i][k]=users[j].name;
			    k++;
				}
			}
			io.to(`${socketId[i]}`).emit('users', {users:`${activeUsers[i]}`});
		}
	 
	}
	
	});  


  socket.on('disconnect', () => {
	console.log('a user had left');
	const user = getUser(socket.id);
	if(user!=undefined){
	removeUser(user.id);
        //io.to(`${socket.id}`).emit('message', {user: 'admin', text: 'You have left the app, please come back soon...' });
	socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} has left the app`});

	const users = getUsersInRoom(user.room);
	var i, j, k;
	var socketId = [];
	
	activeUsers = new Array(users.length);
	for(i=0; i<users.length; i++)
		activeUsers[i] = new Array(users.length-1);
	
	for(i=0; i<users.length; i++){
		socketId[i]=users[i].id;
		for(j=0, k=0; j<users.length; j++){
			if(i!=j){
		 	    activeUsers[i][k]=users[j].name;
			    k++;
				}
			}
			io.to(`${socketId[i]}`).emit('users', {users:`${activeUsers[i]}`});
		}
	 }
	})
	
});
// on heroku server is /posts/api/messages
app.use('/posts/api/messages', posts);
app.use('/posts/api/files', files)
app.use('/api/loginRegister', loginRegister);
 
// DB Config

//const db = require('./config/keys').MongoURI;

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/dist/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'));
}
 
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server started on port ${port}`))
