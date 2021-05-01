const express = require('express');
const app = express();
const server = require('http').Server(app);
const morgan = require('morgan');
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
  });
const joi = require('joi');
const cors = require('cors');
//middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
//schema
const schema = joi.object({
    from: joi.string(),
    to: joi.string(),
    message: joi.string(),
    timestamp: joi.string(),
});

//db
const Messages = require('./db/database');
//routes
app.get('/api/v1',(req,res) => {
    Messages.find({}).then((messages) => {
        res.json({messages});
    })
})

app.post('/api/v1',(req,res) => {
    const {error,result} = schema.validate(req.body);
    if(error === undefined){
        Messages.insert(req.body).then((result) => res.json({result}));
    }else{
        res.json({error});
    }
})

io.on('connection',(socket) => {
    console.log('user connected');
    socket.on("send",(id,msg) => {
        socket.to(id).emit(msg);
    })
    socket.on("recieve",(msg) => {
        console.log(msg);
    })
    socket.on('disconnect',() => {
        console.log('user disconnected');
    })
});


const PORT = process.env.PORT || 3000;
server.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
})