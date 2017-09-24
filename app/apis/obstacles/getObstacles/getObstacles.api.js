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
            paramTypes.query("tipo", "Tipo", "string")
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
    action: function (req, res) {
        let obj = [{
                "id": "xsdsdcxd",
                "type": "hole",
                "latitude": "-23.5086581",
                "longitude": "-46.5986349"
                },
                {
                    "id": "xsdsddddd",
                    "type": "pole",
                    "latitude": "-23.507674262265095",
                    "longitude": "-46.59869927301634"
                }
                ];
        
        res.status(200).send(obj);
                
    }
};
