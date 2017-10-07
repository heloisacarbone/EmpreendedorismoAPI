'use strict';

const paramTypes = require('swagger-node-express').paramTypes;

module.exports = {
    spec: {
        description: 'Insere um obstaculo',
        path: '/obstacle/insert',
        method: 'POST',
        summary: 'Insere um obstaculo',
        notes: 'Insere um obstaculo',
        type: 'obstacles',
        nickname: 'get',
        produces: ['application/json'],
        parameters: [
            paramTypes.body("obstacles", "Obstaculo", "obstacles")
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
    action: require('./insertObstacles.action')
};
