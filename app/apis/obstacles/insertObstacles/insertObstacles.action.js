'use strict';

const path = require('path'),
    utils = require('../../../utils'), //TODO: Ajustar import
    database = require(path.join(process.cwd(), 'app/database'));

module.exports = function (req, res) {
    try {
        const _id = req.body._id;
        database.obstacles.add(req.body, function (err, obj) {
            if (obj !== null && obj !== undefined &&
                obj.ops !== null && obj.ops !== undefined &&
                obj.ops.length > 0) {
                res.status(200).send(obj.ops[0]);
            } else {
                res.status(500).send(utils.error(err));
            } 
        });
    } catch (err) {
        res.status(500).send(utils.error(err));
    }
};
