"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ACL;
(function (ACL) {
    ACL["ADMIN"] = "admin";
})(ACL = exports.ACL || (exports.ACL = {}));
exports.getFallbackUser = (_id) => ({
    _id,
    avatar: 'https://www.fluigent.com/wp-content/uploads/2018/07/default-avatar-BW.png',
    email: '...',
    location: '...',
    acl: [],
    createdAt: null,
    updatedAt: null,
    deletedAt: null,
    name: '...',
    firstname: '...',
    lastname: '...',
});
//# sourceMappingURL=user.js.map