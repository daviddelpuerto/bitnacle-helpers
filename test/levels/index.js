/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const levels = require('../../src/levels');

describe('#getLogLevel()', () => {
  it('should return "ERROR" if statusCode is equals or higher than 500 and lower than 600', () => {
    expect(levels.getLogLevel({
      statusCode: 500,
    })).to.equal('ERROR');

    expect(levels.getLogLevel({
      statusCode: 599,
    })).to.equal('ERROR');
  });

  it('should return "WARNING" if statusCode is equals or higher than 400 and lower than 500', () => {
    expect(levels.getLogLevel({
      statusCode: 400,
    })).to.equal('WARNING');

    expect(levels.getLogLevel({
      statusCode: 499,
    })).to.equal('WARNING');
  });

  it('should return "INFO" if statusCode is equals or higher than 100 nd lower than 400', () => {
    expect(levels.getLogLevel({
      statusCode: 100,
    })).to.equal('INFO');

    expect(levels.getLogLevel({
      statusCode: 399,
    })).to.equal('INFO');
  });

  it('should throw if statusCode is lower than 100 and higher than 600', () => {
    expect(() => levels.getLogLevel({
      statusCode: 99,
    })).to.throw();

    expect(() => levels.getLogLevel({
      statusCode: 600,
    })).to.throw();
  });

  it('should throw if statusCode is not an integer', () => {
    expect(() => levels.getLogLevel({
      statusCode: 'asd',
    })).to.throw();
  });
});
