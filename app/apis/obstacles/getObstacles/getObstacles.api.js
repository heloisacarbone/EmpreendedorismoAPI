'use strict';

const paramTypes = require('swagger-node-express').paramTypes;

module.exports = {
    spec: {
        description: 'Retorna uma lista de itens obstaculo',
        path: '/obstacle/get',
        method: 'GET',
        summary: 'Retorna uma lista de itens obstaculo',
        notes: 'Retorna uma lista de itens obstaculo',
        type: 'obstacles--',
        nickname: 'get',
        produces: ['application/json'],
        parameters: [
            paramTypes.query("lng", "Longitude", "string"),
            paramTypes.query("lat", "Latitude", "string"),
            paramTypes.query("type", "Tipo", "string")
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
    action: require('./getObstacles.action')
};
