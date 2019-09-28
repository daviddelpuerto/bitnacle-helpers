function getDateFormat(date) {
    if (!(date instanceof Date)) throw new Error('date is not an instance of Date');

    return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
        .map(d => d.toString()
        .padStart(2, '0'))
        .join('-');
};

function getTimeFormat(date) {
    if (!(date instanceof Date)) throw new Error('date is not an instance of Date');

    return [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]
        .map((item, index) => {
            const padSize = index === 3 ? 3 : 2;
            return item.toString().padStart(padSize, '0');
        })
        .join(':'); 
};

function formatTimeZoneOffset(date) {
    if (!(date instanceof Date)) throw new Error('date is not an instance of Date');

    const timeZoneOffset = date.getTimezoneOffset();
    const leadingSymbol = timeZoneOffset < 0 ? '+' : '-';
    const timeZoneOffsetFormat = `${Math.abs((timeZoneOffset/60))}`.padStart(2, '0');
    return `${leadingSymbol}${timeZoneOffsetFormat}00`;
};

function getRequestTime() {
    const date = new Date;
    const dateFormat = getDateFormat(date);
    const timeFormat = getTimeFormat(date);
    const timeOffset = formatTimeZoneOffset(date);
    return `${dateFormat}T${timeFormat}${timeOffset}`;
};

module.exports = {
    formatTimeZoneOffset,
    getDateFormat,
    getTimeFormat,
    getRequestTime,
};
