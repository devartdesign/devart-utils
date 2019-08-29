"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateToQuery = (dateString) => {
    if (!dateString)
        return undefined;
    const date = new Date(dateString);
    const fullYear = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();
    return `${fullYear}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
};
//# sourceMappingURL=formatDateToQuery.js.map