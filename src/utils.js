const stream = require('stream');

function isWritableStream(obj) {
  return obj instanceof stream.Stream
        && typeof obj._write === 'function'
        && typeof obj._writableState === 'object';
}

module.exports = {
  isWritableStream,
};
