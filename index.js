const express = require("express");
var http = require("http");
const ms = require("ms");
const app = express(); 
const PORT = process.env.PORT || 5000; 
var server = http.createServer(app);
var io = require("socket.io")(server); 

//middleware
app.use(express.json());
var clients = {};

io.on("connection", (socket)=>{
    console.log("connected");
    console.log(socket.id, "has joined"); 
    socket.on("/signin", (id)=>{
        console.log(id);  
        clients[id] = socket;
        console.log(clients); 
    });
    socket.on("message", (msg)=>{
        console.log(msg); 
    });
}); 

server.listen(PORT, "0.0.0.0", ()=> {   
    console.log("server started");
});  