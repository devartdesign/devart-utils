"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status["OPEN"] = "open";
    Status["CLOSED"] = "closed";
})(Status = exports.Status || (exports.Status = {}));
var Type;
(function (Type) {
    Type["RESCHEDULE"] = "reschedule";
    Type["LATE"] = "late";
    Type["CONFIRM"] = "confirm";
    Type["OTHER"] = "other";
})(Type = exports.Type || (exports.Type = {}));
var ResolveReason;
(function (ResolveReason) {
    ResolveReason["OPENED_INCORRECTLY"] = "1";
    ResolveReason["REQUEST_FULFILLED"] = "2";
    ResolveReason["OPEN_TOO_LONG"] = "3";
    ResolveReason["OTHER"] = "4";
})(ResolveReason = exports.ResolveReason || (exports.ResolveReason = {}));
exports.getFallbackRequest = (_id, channelId) => ({
    _id,
    type: Type.CONFIRM,
    createdById: null,
    channelId,
    parentId: null,
    childId: null,
    status: Status.OPEN,
    therapyList: [],
    assignedId: null,
    metadata: {}
});
//# sourceMappingURL=request.js.map