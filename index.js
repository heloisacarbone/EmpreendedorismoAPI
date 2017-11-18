'use strict';

const express = require('express'),
    swagger = require('node-swagger-ui'),
    database = require('./app/database'),
    uncaughtError = require('./app/utils/error/uncaught-errors.js');

const app = express();
uncaughtError();


swagger(app).configure({
    ip: undefined,
    port: process.env.PORT || 7010,
    headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization,' +
        'If-Modified-Since, Cache-Control, Pragma',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*'
    },
    models: [
        'app/models/**/*.js'
    ],
    apis: [
        'app/apis/**/*.api.js'
    ],
    swagger: {
        title: 'APIs Generator',
        description: 'Module to simple API creations.',
        termsOfServiceUrl: '',
        contact: '',
        swaggerDoc: 'api-docs',
        url: '/docs',
        version: '1.0.0'
    }
}).start();

database.initialize();
