const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://oj:oj-001@ds157614.mlab.com:57614/oj');
const io = require('socket.io')();
const editorSocketService = require('./services/editor-socket-service')(io);

const restRouter = require('./routes/rest');
const root = path.join(__dirname, '../public');
app.use('/api/v1', restRouter);
app.use(express.static(root));
app.use((req, res) => res.sendFile('index.html', {root}));

//app.listen(3000, () => console.log('Example app listening on port 3000!'));
const server = http.createServer(app);
io.attach(server);
server.on('listening', () => console.log('Example app listening on port 3000!'));
server.listen(3000);