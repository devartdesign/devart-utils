"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listToMap = (list, map = {}, indexField = 'id') => (list.reduce((total, item) => (Object.assign({}, total, { [item[indexField]]: item })), map));
//# sourceMappingURL=listToMap.js.map