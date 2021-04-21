"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFallbackPost = (post = {
    title: '',
    post: '',
    slug: '',
    user: null,
}) => ({
    id: null,
    title: post.title,
    post: post.post,
    year: null,
    month: null,
    day: null,
    slug: post.slug,
    tags: [],
    user: post.user,
    isPublished: false,
    created_at: null,
    updated_at: null
});
//# sourceMappingURL=post.js.map