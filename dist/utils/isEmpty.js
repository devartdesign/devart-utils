"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = entity => entity && typeof entity === 'object' && entity.constructor === Object;
exports.isArray = value => Array.isArray(value);
exports.isUndefined = value => value === undefined;
exports.isEmpty = (value) => {
    if (exports.isObject(value)) {
        return Object.keys(value).length === 0;
    }
    if (exports.isUndefined(value)) {
        return true;
    }
    if (exports.isArray(value)) {
        return value.length === 0;
    }
    return value === '';
};
//# sourceMappingURL=isEmpty.js.map