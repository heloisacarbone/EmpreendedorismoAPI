'use strict';

const paramTypes = require('swagger-node-express').paramTypes;

module.exports = {
    spec: {
        description: 'Teste add',
        path: '/add',
        method: 'POST',
        summary: 'Add test',
        notes: 'Add test',
        type: 'test',
        nickname: 'add',
        produces: ['application/json'],
        parameters: [
            paramTypes.body('test', 'Test Data', 'test')
        ],
        errorResponses: [
            {
                code: '200',
                reason: 'Return OK'
            },
            {
                code: '500',
                reason: 'Error',
                responseModel: 'errorResponse'
            }
        ]
    },
    action: require('./add.action')
};
