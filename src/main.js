const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);

app.use(require('./routes/stream.routes'));


//app.set('port', 5000)

require('./app');

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socket.on('stream', (image) => {
        // emitir video
        socket.broadcast.emit('stream', image);
    });
});





//app.listen(5000, () => {
  //  console.log(`servidor corriendo en el puerto ${app.get('port')}`);
  // });


 module.exports = http;  