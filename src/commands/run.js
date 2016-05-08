import { logger, SERVER } from 'stutter-util';
import { server } from '../';

export default async function start(options) {
  try {
    logger.info(SERVER, `Attempting to run server...`);
    await server.run();
  } catch(throwable) {
    logger.debug(SERVER, throwable.stack);
  }
}
