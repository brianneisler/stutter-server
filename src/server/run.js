import generateServer from './generateServer';
import init from './init';

export default async function run() {
  const server = generateServer();
  await init(server);
}
