"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQuery = (query) => Object.keys(query)
    .filter(key => query[key] !== undefined)
    .map(key => Array.isArray(query[key])
    ? query[key].map(item => `${key}=${item}`).join('&')
    : `${key}=${query[key] && typeof query[key] === 'object' ? JSON.stringify(query[key]) : query[key]}`)
    .join('&');
//# sourceMappingURL=parseQuery.js.map