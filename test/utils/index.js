/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const fs = require('fs');
const utils = require('../../src/utils');

const LOG_FILE = './test/sample.log';

fs.writeFileSync(LOG_FILE);

describe('#isWritableStream()', () => {

  it('should return true if its a writable stream', () => {
    const writableStream = fs.createWriteStream(LOG_FILE);
    expect(utils.isWritableStream(writableStream)).to.be.true;
  });

  it('should return false if its not a writable stream', () => {
    const readableStream = fs.createReadStream(LOG_FILE);

    [{}, [], 'not a stream', readableStream].forEach((param) => {
      expect(utils.isWritableStream(param)).to.be.false;
    });
  });
});
