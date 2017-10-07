'use strict';

const mongo = require('mongodb'),
    mongoose = require('mongoose'),
    moment = require('moment');

let collection;

function _validateId (_id, callback) {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return callback({
            client: true,
            err: '_id is not a valid mongoID'
        });
    }
    return callback();
}

module.exports = function () {
    return {
        initialize: function (db) {
            collection = db.collection('obstacles');
        },
        add: function (o, callback) {
            collection.insert(o, {safe: true}, callback);
        },
        get: function (_id, callback) {
            _validateId(_id, function (err) {
                if (err) {
                    return callback(err, undefined);
                }
                collection.findOne({_id: new mongo.ObjectID(_id)}, callback);
            });
        },
        list: function (callback) {
            collection.find({}).toArray(callback);
        },
        remove: function (_id, callback) {
            _validateId(_id, function (err) {
                if (err) {
                    return callback(err, undefined);
                }
                collection.remove({_id: new mongo.ObjectID(_id)}, callback);
            });
        }
    };
};
