'use strict';

const dotenv = require('dotenv');

const ENV_FILE = '.env';
const ENV_FILE_LOCAL = '.env.local';

if (process.env.NODE_ENV !== 'test') {
  dotenv.config({ path: ENV_FILE_LOCAL });
  dotenv.config({ path: ENV_FILE });
}

module.exports = {
  ENV_FILE,
  ENV_FILE_LOCAL,
};
