import { start } from '../';
import { COMMAND, logger } from '../log';

export default async function start(options) {
  try {
    await start();
  } catch(throwable) {
    logger.debug(COMMAND, throwable.stack);
  }
}
