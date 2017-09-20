'use strict';

const chai = require('chai'),
    mocha = require('mocha');

const expect = chai.expect,
    beforeEach = mocha.beforeEach;

let error;

beforeEach(() => {
    error = require('./error');
});

describe('utils/error', () => {
    it('should be a function', () => {
        expect(typeof error).to.equal('function');
    });

    it('should format an error', () => {
        const exp = new Error('My error');

        expect(error(exp)).to.deep.equal({
            'error': exp
        });
    });
});
