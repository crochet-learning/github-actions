import {expect} from 'chai';
import {returnOne} from '../src/one.js';

describe('one', () => {
    it('should return one',  () => {
        expect(returnOne()).to.be.equal('one');
    });
});

