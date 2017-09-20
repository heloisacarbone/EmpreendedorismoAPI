'use strict';

module.exports = {
    spec: {
        description: 'Return all items',
        path: '/list',
        method: 'GET',
        summary: 'Return all items',
        notes: 'Return all items',
        type: 'test',
        nickname: 'list',
        produces: ['application/json'],
        parameters: [],
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
    action: require('./list.action')
};
