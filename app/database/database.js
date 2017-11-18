'use strict';

const fs = require('fs'),
    path = require('path');

const mongo = require('mongodb');
const config = require(path.join(process.cwd(), 'app/config'));

function setCollections (db) {
    const folder = './app/database/collections/';

    fs.readdirSync(folder).forEach((file) => {
        const coll = file.split('.')[0];

        module.exports[coll] = require('./collections/' + file)();
        module.exports[coll].initialize(db);
    });
}

function connectionCallback (error, db) {
    if (error) {
        throw error;
    }
    setCollections(db);
}

function _initialize () {
    const mongo_uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : config.mongoEndpoint;
    console.log('connecting @', mongo_uri);

    mongo.MongoClient.connect(mongo_uri, connectionCallback);
}

const _database = {
    initialize: _initialize
};

module.exports = _database;
