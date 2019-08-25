const getLogLevel = function({ statusCode }) {
    if (statusCode >= 500) {
        return 'ERROR';
    } else if (statusCode >= 400) {
        return 'WARNING';
    } else if (statusCode >= 100) {
        return 'INFO';
    }
}

module.exports = {
    getLogLevel
}