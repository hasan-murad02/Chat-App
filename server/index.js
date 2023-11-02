const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const routes = require("./Routes/Config");


const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors(
    {
        origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],        
    }
));
app.use(express.json({ limit: '1000mb' }));
app.use(express.urlencoded({ extended: true, limit: '1000mb' }));

routes(app);  

const UserInformation = require('./Models/UserInformation')
const UserModel = require('./Models/UserModel')
const PostModel = require('./Models/PostModel')
const Conversation = require('./Models/Conversation');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const GetToken = require('./Middleware/GetToken')

const io = require("socket.io")(5050, {
  cors: {
    origin: "*",
  },
});

let users = [];
io.on("connection", (socket) => {
  socket.on('addUser', userId => {
    const Exists = users.some(user => user.userId === userId);
    if (!Exists) {
      users.push({ id: socket.id, userId: userId });
      io.emit('getUsers', users);
    }
  });

  socket.on('RemoveUser', userId => {
    users = users.filter(user => user.userId !== userId);
    io.emit('getUsers', users);
  });

  //send and get message
  socket.on('sendMessage', ({ MessageId, SenderId, text, Reciever }) => {
    const user = users.find(user => user.userId === Reciever);
    if (user) {
      io.to(user.id).emit('getMessage', {
        MessageId,
        SenderId,
        text,
        Reciever
      });
    }
  });
});


app.listen( PORT , ()=> {console.log(`LISTENING AT PORT: ${PORT}`)} )
