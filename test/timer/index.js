/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const timer = require('../../src/timer');

describe('#getDateFormat()', () => {
  it('should throw if date is not an instance of Date', () => {
    expect(() => timer.getDateFormat(123)).to.throw();
  });
});

describe('#getTimeFormat()', () => {
  it('should throw if date is not an instance of Date', () => {
    expect(() => timer.getTimeFormat(123)).to.throw();
  });
});

describe('#formatTimeZoneOffset()', () => {
  it('should throw if date is not an instance of Date', () => {
    expect(() => timer.formatTimeZoneOffset(123)).to.throw();
  });
});

describe('#getRequestTime()', () => {
  it('should return a well formated date time string', () => {
    const requestTimeRegex = new RegExp('\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}:\\d{3}[+-]\\d{4}');
    const requestTime = timer.getRequestTime();
    expect(requestTimeRegex.test(requestTime)).to.be.true;
  });
});
