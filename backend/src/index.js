const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setUpWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setUpWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(routes); // this row needs to be after `app.use(express.json());`
mongoose.connect('mongodb+srv://maicon:omnistack@cluster0-rgv9v.mongodb.net/week10?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.listen(7777);