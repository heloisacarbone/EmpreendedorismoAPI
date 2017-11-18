'use strict';

const paramTypes = require('swagger-node-express').paramTypes;

module.exports = {
    spec: {
        description: 'Retorna as posicoes de onibus de uma determinada linha da API da SPTrans',
        path: '/sptrans/posicao/{code}',
        method: 'GET',
        summary: 'Retorna array de posicoes da linha',
        notes: 'Retorna array de posicoes da linha',
        type: 'linha',
        nickname: 'get',
        produces: ['application/json'],
        parameters: [
            paramTypes.path('code', 'Codigo cl da linha', 'string'),
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
    action: require('./posicao.action')
};
