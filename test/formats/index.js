const { expect } = require('chai');
const { levels } = require('../../src/levels');
const timer = require('../../src/timer');
const formats = require('../../src/formats');

const logMessageObject = {
    time: timer.getRequestTime(),
    level: 'INFO',
    req: {
        method: 'GET',
        endpoint: '/api/endpoint',
        remoteAddress: '::ffff:',
        id: 'p1998h-457fs-qf4q4-gfaw44ag'
    },
    statusCode: 200,
    elapsedTime: 50,
    message: 'Info message'
};

describe('#simple()', function() {
    it('should return a string with the correct format', function() {
        const simpleFormatLogMessage = formats.simple(logMessageObject);
        const simpleFormatLogMessageHasCorrectFormat = /\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}:\d{3}[+-]\d{4}\]\s\[[\w\s]*\]\s\[(GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH)\]\s\[[\/\w*]*\]\s\[[a-zA-Z09:*]*\]\s\[[\w*-]*\]\s\[[1-5]\d{2}\]\s\[\d*\]\s\[[\w\s]*\]/.test(simpleFormatLogMessage);
        expect(simpleFormatLogMessageHasCorrectFormat).to.be.true;
    });

    it('should throw if req is not an object', function() {
        expect(() => formats.simple({
            req: 'request'
        })).to.throw();
    });

    it('should throw if extra is not an object', function() {
        expect(() => formats.simple({
            extra: 'extra info'
        })).to.throw();
    });
});

describe('#json()', function() {
    it('should return an object with all expected properties', function() {
        const parsedLogMessage = JSON.parse(formats.json(logMessageObject));

        expect(parsedLogMessage)
            .to.be.an('object')
            .to.not.be.empty;
        
        Object.entries(logMessageObject).forEach(entry => {
            if (typeof logMessageObject[entry[0]] !== 'object') {
                expect(parsedLogMessage).to.have.property(entry[0]);
            }
        });
    });

    it('should throw if req is not an object', function() {
        expect(() => formats.json({
            req: 'request'
        })).to.throw()
    });

    it('should throw if extra is not an object', function() {
        expect(() => formats.json({
            extra: 'info'
        })).to.throw()
    });
});

describe('#extended()', function() {
    it('should return the same object', function() {
        expect(formats.extended(logMessageObject)).to.deep.equal(logMessageObject);
    });
});