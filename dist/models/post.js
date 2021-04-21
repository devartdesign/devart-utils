"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFallbackPost = ({ title = '', post = '', slug = '', user = null, }) => ({
    id: null,
    title,
    post,
    year: null,
    month: null,
    day: null,
    slug,
    tags: [],
    user,
    isPublished: false,
    created_at: null,
    updated_at: null
});
//# sourceMappingURL=post.js.map