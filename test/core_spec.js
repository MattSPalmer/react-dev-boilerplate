import {expect} from 'chai';

describe('core', () => {
    describe('feature', () => {
        it('1 equals 1', () => {
            expect(1).to.equal(1);
        });

        it('1 does not equal 2', () => {
            expect(1).to.not.equal(2);
        });

    });
});
