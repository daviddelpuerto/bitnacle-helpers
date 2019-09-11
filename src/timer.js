const formatTimeZoneOffset = function(date) {
    const timeZoneOffset = date.getTimezoneOffset();
    const leadingSymbol = timeZoneOffset < 0 ? '+' : '-';
    const timeZoneOffsetFormat = `${(timeZoneOffset/60) * (-1)}`.padStart(2, '0');
    return `${leadingSymbol}${timeZoneOffsetFormat}00`;
}

const getRequestTime = function() {
    const date = new Date;
    const timeOffset = formatTimeZoneOffset(date);
    const dateFormat = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(d => d.toString().padStart(2, '0')).join('-');
    const timeFormat = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()].map((item, index) => {
        const padSize = index === 3 ? 3 : 2;
        return item.toString().padStart(padSize, '0');
    }).join(':'); 
    return `${dateFormat}T${timeFormat}${timeOffset}`;
}

const getLogTime = getRequestTime;

const formatLocaleDateString = function() {
    return new Date().toLocaleDateString().split('/').map(d => d.padStart(2, '0')).reverse().join('');
}

module.exports = {
    getRequestTime,
    getLogTime,
    formatLocaleDateString
}