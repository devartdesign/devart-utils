"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFallbackAlbum = () => ({
    id: null,
    title: null,
    dirName: null,
    description: null,
    date: null,
    images: []
});
exports.getFallbackAlbumImage = ({ name = '' }) => ({
    id: null,
    name,
    mimeType: null,
    size: null,
    path: null,
    album_id: null
});
//# sourceMappingURL=album.js.map