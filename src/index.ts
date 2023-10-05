import { server } from './server'
import { config } from 'dotenv'
import { APP_PORT } from './core';

config();

server.listen(APP_PORT || 3333, () => console.log(`
  Server is running in port ${APP_PORT || 3333}.
`));
