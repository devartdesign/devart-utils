"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
exports.getLoginResponse = () => ({
    token: 'token-string'
});
exports.getLoading = (loading = { isLoading: false, hasError: false, error: null, traceId: undefined }) => ({
    isLoading: loading.isLoading,
    hasError: loading.hasError,
    error: loading.error,
    traceId: loading.traceId
});
exports.getUser_1 = () => ({
    id: 1,
    email: 'rgonzalez@devartdesign.com',
    name: 'Ramiro',
});
exports.getUser_2 = () => ({
    id: 2,
    email: 'teresa@devartdesign.com',
    name: 'Teresa',
});
exports.getTag_1 = () => ({
    id: 1,
    name: 'tag name',
    description: 'tag description'
});
exports.getTag_2 = () => ({
    id: 2,
    name: 'tag name 2',
    description: 'tag description 2'
});
exports.getPost_1 = () => ({
    id: 1,
    title: 'post title',
    post: 'post content',
    year: 2021,
    month: 4,
    day: 16,
    slug: 'post-title',
    tags: [],
    user: exports.getUser_1(),
    isPublished: true,
    created_at: '2021-04-18',
    updated_at: '2021-04-18',
});
exports.getPost_2 = () => ({
    id: 2,
    title: 'post title 2',
    post: 'post content 2',
    year: 2021,
    month: 4,
    day: 15,
    slug: 'post-title-2',
    tags: [exports.getTag_1()],
    user: exports.getUser_1(),
    isPublished: false,
    created_at: '2021-04-18',
    updated_at: '2021-04-18'
});
exports.getFile_1 = () => ({
    name: 'test.png',
    size: 13290,
    type: 'images/png'
});
exports.getFile_2 = () => ({
    name: 'test-2.jpg',
    size: 12902,
    type: 'images/jpeg'
});
exports.getFile_3 = () => ({
    name: 'test.exe',
    size: 400,
    type: 'executable'
});
exports.getFile_4 = () => ({
    name: 'test.png',
    size: 237812932102,
    type: 'executable'
});
exports.getUploadFile_1 = () => (Object.assign({}, models_1.FileModel.getFallbackFile({ file: exports.getFile_1(), uploadId: 'test-upload-id' }), { id: 'upload-id-1', status: 0 }));
exports.getUploadFile_2 = () => (Object.assign({}, models_1.FileModel.getFallbackFile({ file: exports.getFile_2(), uploadId: 'test-upload-id' }), { id: 'upload-id-2', status: models_1.FileModel.FileStatus.PROGRESS }));
exports.getUploadFile_3 = () => (Object.assign({}, models_1.FileModel.getFallbackFile({ file: exports.getFile_2(), uploadId: 'test-upload-id' }), { id: 'upload-id-3', progress: 100, status: models_1.FileModel.FileStatus.FAIL }));
exports.getUploadFile_4 = () => (Object.assign({}, models_1.FileModel.getFallbackFile({ file: exports.getFile_3(), uploadId: 'test-upload-id' }), { id: 'upload-id-4', progress: 0, status: models_1.FileModel.FileStatus.FAIL, error: 'Server Error' }));
exports.getUploadFile_5 = () => (Object.assign({}, models_1.FileModel.getFallbackFile({ file: exports.getFile_4(), uploadId: 'test-upload-id' }), { id: 'upload-id-5', progress: 0, status: models_1.FileModel.FileStatus.INACTIVE, error: null }));
exports.getAlbum_1 = () => ({
    id: 1,
    title: 'album 1',
    dirName: 'path/to/album',
    description: 'description',
    date: '2021-10-10',
    images: []
});
exports.getAlbum_2 = () => ({
    id: 2,
    title: 'album 2',
    dirName: 'path/to/album/2',
    description: 'description 2',
    date: '2021-10-10',
    images: []
});
exports.getArchive_1 = () => ({
    year: 2018,
    month: 8,
    total: 15
});
exports.getArchive_2 = () => ({
    year: 2018,
    month: 9,
    total: 2
});
//# sourceMappingURL=entities.js.map