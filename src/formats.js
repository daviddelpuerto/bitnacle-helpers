module.exports = {
    
    simple: ({ time, level, userAgent, req = {}, statusCode, extra = {}, elapsedTime, message }) => {
        if (typeof req !== 'object') throw new Error('req must be an object');
        if (typeof extra !== 'object') throw new Error('extra must be an object');

        const { method, endpoint, remoteAddress, id } = req;
        const messageObject = { time, level, method, endpoint, remoteAddress, userAgent, id, statusCode, ...extra, elapsedTime, message };
        return Object.values(messageObject)
            .filter(prop => prop !== undefined && typeof prop !== 'object')
            .map(prop => `[${prop}]`)
            .join(' ');
    },

    json: ({ time, level, userAgent, req = {}, statusCode, extra = {}, elapsedTime, message }) => {
        if (typeof req !== 'object') throw new Error('req must be an object');
        if (typeof extra !== 'object') throw new Error('extra must be an object');
        
        const { method, endpoint, remoteAddress, id } = req;
        return JSON.stringify({ time, level, method, endpoint, remoteAddress, userAgent, id, statusCode, ...extra, elapsedTime, message });
    },

    extended: (logMessageObject) => JSON.stringify(logMessageObject),

}