'use strict';

const paramTypes = require('swagger-node-express').paramTypes;

module.exports = {
    spec: {
        description: 'Delete',
        path: '/delete/{_id}',
        method: 'POST',
        summary: 'Delete an item.',
        notes: 'Delete an item.',
        type: 'deleteResponse',
        nickname: 'delete',
        produces: ['application/json'],
        parameters: [
            paramTypes.path('_id', 'MongoID', 'string'),
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
    action: require('./delete.action')
};
