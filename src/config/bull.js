'use strict'

// const Env = use('Env')
require("dotenv").config();

module.exports = {
  // redis connection
  connection: (process.env.BULL_CONNECTION, 'bull'),
  bull: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
      db: 0,
      keyPrefix: '',
    },
  },
  remote: process.env.REDIS_REMOTE,
}