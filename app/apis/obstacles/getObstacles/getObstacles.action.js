'use strict';

const path = require('path'),
    utils = require('../../../utils'), //TODO: Ajustar import
    database = require(path.join(process.cwd(), 'app/database'));

module.exports = function (req, res) {

    let lng = req.params.lng;
    let lat = req.params.lat;
    let type = req.params.type;
    try {
        database.obstacles.list(function (err, obj) {
            if (err) {
                res.status(500).send(utils.error(err));
            } else {
                res.status(200).send(obj);
            }
        });
    } catch (err) {
        res.status(500).send(utils.error(err));
    }
};
