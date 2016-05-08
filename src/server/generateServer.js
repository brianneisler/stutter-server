import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

let stutterServer = null;
export default function generateServer() {
  if (!stutterServer) {
    const app     = express();
    const server  = http.Server(app);
    const io      = socketIo(server);
    stutterServer = {
      app,
      server,
      io
    };
  }
  return stutterServer;
}
