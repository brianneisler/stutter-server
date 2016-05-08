import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import Promise from 'bluebird';
import { SERVER, logger } from 'stutter-util';
import config from '../../config/config.json';
import stop from './stop';

export default async function init(server) {

  process.once('SIGINT', () => {
    logger.info(SERVER, `SIGINT received.`);
  });

  server.app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, '..', '..', 'index.html'));
  });

  server.io.on('connection', (socket) => {
    socket.on('STOP', (data) => {
      logger.info(SERVER, `STOP received. Stopping server...`);
      socket.emit('STOP_ACK');
      stop();
      process.exit();
    });
  });

  await listen(server.server, config.port);
}

function listen(server, port) {
  logger.info(SERVER, `Starting server on port ${port}`);
  return new Promise((resolve, reject) => {
    server.listen(port, () => {
      logger.info(SERVER, `Server listening on port ${port}`);
    });
  });
}
