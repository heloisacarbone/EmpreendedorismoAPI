'use strict';

const chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    mongo = require('mongo-mock'),
    mocha = require('mocha');

chai.use(sinonChai);
process.env.IS_MOCK = true;

const expect = chai.expect,
    spy = sinon.spy,
    beforeEach = mocha.beforeEach;

let database;

beforeEach(() => {
    database = require('./database');
});

describe('database', () => {
    it('should be a object', () => {
        expect(typeof database).to.equal('object');
        expect(typeof database.initialize).to.equal('function');
    });

    it('should connect to mongodb', () => {
        const mongoConnect = spy(mongo.MongoClient, 'connect');

        database.initialize();
        expect(mongoConnect.calledOnce).to.be.true;
    });
});
