const getLogLevel = function({ statusCode }) {
    const normalizedStatusCode = parseInt(statusCode);

    if (normalizedStatusCode !== normalizedStatusCode) throw new Error('statusCode must be an integer');

    if (normalizedStatusCode >= 500 && normalizedStatusCode < 600) {
        return 'ERROR';
    } else if (normalizedStatusCode >= 400 && normalizedStatusCode < 500) {
        return 'WARNING';
    } else if (normalizedStatusCode >= 100 && normalizedStatusCode < 400) {
        return 'INFO';
    } else {
        throw new Error(`invalid statusCode ${statusCode}: it must be an integer between 100 and 599 both included`);
    }
};

module.exports = {
    getLogLevel
};