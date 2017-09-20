'use strict';

const paramTypes = require('swagger-node-express').paramTypes;

module.exports = {
    spec: {
        description: 'Return an item',
        path: '/get/{_id}',
        method: 'GET',
        summary: 'Return an item',
        notes: 'Return an item',
        type: 'test',
        nickname: 'get',
        produces: ['application/json'],
        parameters: [
            paramTypes.path('_id', 'MongoID', 'string')
        ],
        errorResponses: [
            {
                code: '200',
                reason: 'OK'
            },
            {
                code: '500',
                reason: 'Error',
                responseModel: 'errorResponse'
            }
        ]
    },
    action: require('./get.action')
};
