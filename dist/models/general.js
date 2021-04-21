"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateFormat;
(function (DateFormat) {
    DateFormat[DateFormat["DATE"] = 0] = "DATE";
    DateFormat[DateFormat["DATE_TEXT"] = 1] = "DATE_TEXT";
    DateFormat[DateFormat["DATE_MONTH"] = 2] = "DATE_MONTH";
    DateFormat[DateFormat["MONTH_YEAR"] = 3] = "MONTH_YEAR";
    DateFormat[DateFormat["DATE_TIME"] = 4] = "DATE_TIME";
    DateFormat[DateFormat["NUMERIC_DATE"] = 5] = "NUMERIC_DATE";
    DateFormat[DateFormat["DASHED_NUMERIC"] = 6] = "DASHED_NUMERIC";
})(DateFormat = exports.DateFormat || (exports.DateFormat = {}));
exports.dateFormatMap = {
    [DateFormat.DATE]: 'MMM DD, YYYY',
    [DateFormat.DATE_TEXT]: 'MMMM DD, YYYY',
    [DateFormat.DATE_MONTH]: 'DD MMM',
    [DateFormat.MONTH_YEAR]: 'MMMM YYYY',
    [DateFormat.DATE_TIME]: 'MMM DD, YYYY hh:mm a',
    [DateFormat.NUMERIC_DATE]: 'MM/DD/YYYY',
    [DateFormat.DASHED_NUMERIC]: 'YYYY-MM-DD'
};
//# sourceMappingURL=general.js.map