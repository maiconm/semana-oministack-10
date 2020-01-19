const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');

let connections = [];

exports.setUpWebsocket = (server) => {
  const io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    })
  });
};