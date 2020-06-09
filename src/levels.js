const levels = {
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
};

function getLogLevel({ statusCode }) {
  const normalizedStatusCode = parseInt(statusCode, 10);

  if (Number.isNaN(normalizedStatusCode)) throw new Error('statusCode must be an integer');

  if (normalizedStatusCode >= 500 && normalizedStatusCode < 600) {
    return levels.ERROR;
  } if (normalizedStatusCode >= 400 && normalizedStatusCode < 500) {
    return levels.WARNING;
  } if (normalizedStatusCode >= 100 && normalizedStatusCode < 400) {
    return levels.INFO;
  }
  throw new Error(`invalid statusCode ${statusCode}: it must be an integer between 100 and 599 both included`);
}

module.exports = {
  levels,
  getLogLevel,
};
