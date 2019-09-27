const { expect } = require('chai');
const timer = require('../../src/timer');
const formats = require('../../src/formats');

describe('#simple', function() {
    const str = formats.simple({
        time: timer.getRequestTime()
    });

    console.log(str);

    it('should return a string with the correct format', function() {
        formats.simple({
            time: Date.now()
        });
    });
});