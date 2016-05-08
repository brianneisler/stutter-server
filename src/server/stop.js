import generateServer from './generateServer';

export default function stop() {
  const server = generateServer();
  server.io.close();
}
