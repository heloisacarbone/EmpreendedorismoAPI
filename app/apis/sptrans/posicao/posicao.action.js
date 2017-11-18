'use strict';

const path = require('path'),
    utils = require('../../../utils'), //TODO: Ajustar import
    database = require(path.join(process.cwd(), 'app/database')),
    request=require('request');

module.exports = function (req, res) {
    
    let code = req.params.code;
    console.log('code', code);
    var options = {
        url: 'http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=eed2f0a08d1982d4facdad7ec54cd0d46ad0e00664e9b9fd72b74a9187d255c0',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }; 
    request(options, function(err, response, body) {
        if (response && (response.statusCode === 200 || response.statusCode === 201)) {
            var options2 = {
                url: 'http://api.olhovivo.sptrans.com.br/v2.1/Posicao/Linha?codigoLinha=' + code,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cookie': response.headers['set-cookie'][0]
                }
            };
            request(options2, function(err, r, body2) {
                console.log('b', body2);
                if (r && (r.statusCode === 200 || r.statusCode === 201)) {
                    res.status(200).send(body2);
                } else {
                    res.status(500).send(utils.error(err));
                }
            });
        } else {
            res.status(500).send(utils.error(err));
        }
    });
};
