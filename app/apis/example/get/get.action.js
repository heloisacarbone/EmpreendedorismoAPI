'use strict';

const path = require('path'),
    utils = require('../../../utils'), //TODO: Ajustar import
    database = require(path.join(process.cwd(), 'app/database'));

module.exports = function (req, res) {
    try {
        database.test.get(req.params._id, function (err, obj) {
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
