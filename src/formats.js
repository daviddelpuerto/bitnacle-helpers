module.exports = {
    
    simple: ({ time, level, req, statusCode, elapsedTime, message }) => {
        const { method, endpoint, remoteAddress, id } = req;
        const messageObject = { time, level, method, endpoint, remoteAddress, id, statusCode, elapsedTime, message };
        return Object.values(messageObject)
            .filter(prop => prop !== undefined)
            .map(prop => `[${prop}]`)
            .join(' ');
    },

    json: ({ time, level, req, statusCode, elapsedTime, message }) => {
        const { method, endpoint, remoteAddress, id } = req;
        return JSON.stringify({ time, level, method, endpoint, remoteAddress, id, statusCode, elapsedTime, message });
    },

    extended: (logMessageObject) => logMessageObject,

}