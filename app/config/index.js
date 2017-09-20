'use strict';

module.exports = require('./config'+(process.env.ENV ? '.'+process.env.ENV : ''));
