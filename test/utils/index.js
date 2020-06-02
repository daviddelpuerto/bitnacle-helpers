const { expect } = require('chai');
const fs = require('fs');
const utils = require('../../src/utils');

describe('#isWritableStream()', function() {
    const sampleFile = './log.txt';
    fs.writeFileSync(sampleFile);

    it('should return true if its a writable stream', function() {
        const writableStream = fs.createWriteStream(sampleFile);
        expect(utils.isWritableStream(writableStream)).to.be.true;
    });

    it('should return false if its not a writable stream', function() {
        const readableStream = fs.createReadStream(sampleFile);

        [{}, [], 'not a stream', readableStream].forEach(param => {
            expect(utils.isWritableStream(param)).to.be.false;
        });
    });
});