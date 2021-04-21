"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const general_1 = require("../models/general");
exports.formatDate = (date, format) => date ? moment(date).format(general_1.dateFormatMap[format]) : null;
//# sourceMappingURL=formatDate.js.map