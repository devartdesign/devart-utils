"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
exports.getFallbackPost = (postQuery) => ({
    id: null,
    title: '...',
    post: '...',
    year: null,
    month: null,
    day: null,
    tags: [],
    user: index_1.UserModel.getFallbackUser(),
    slug: '...',
    createdAt: null,
    updatedAt: null
});
//# sourceMappingURL=post.js.map