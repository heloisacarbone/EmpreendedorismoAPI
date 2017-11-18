'use strict';

const paramTypes = require('swagger-node-express').paramTypes;

module.exports = {
    spec: {
        description: 'Retorna as linhas de onibus desejadas da API da SPTrans',
        path: '/sptrans/linha/{l}',
        method: 'GET',
        summary: 'Retorna dados da linha',
        notes: 'Retorna dados da linha',
        type: 'linha',
        nickname: 'get',
        produces: ['application/json'],
        parameters: [
            paramTypes.path('l', 'Dados da linha', 'string'),
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
