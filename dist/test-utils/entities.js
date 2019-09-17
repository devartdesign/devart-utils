"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
exports.getTestDate = (date = '2019-03-05 11:01:45') => new Date(Date.parse(date));
exports.getRole_1 = () => ({
    _id: 'general',
    value: 'general',
    short: 'GE'
});
exports.getRole_2 = () => ({
    _id: 'speech',
    value: 'Speech Therapist',
    short: 'ST'
});
exports.getUser_1 = () => ({
    _id: 1,
    email: 'rgonzalez@devartdesign.com',
    name: 'Ramiro Gonzalez',
    firstname: 'Ramiro',
    lastname: 'Gonzalez',
    avatar: 'https://lh4.googleusercontent.com/-WUY2PDwnKZk/AAAAAAAAAAI/AAAAAAAAAAc/1UMlOKImKRA/photo.jpg',
    location: 'ar',
    acl: [models_1.UserModel.ACL.ADMIN],
    createdAt: exports.getTestDate('2018-05-23 00:00:00'),
    updatedAt: exports.getTestDate('2018-08-20 00:00:00'),
});
exports.getUser_2 = () => ({
    _id: 2,
    email: 'pepe.lorenzo@devartdesign.com',
    name: 'Pepe Lorenzo',
    firstname: 'Pepe ',
    lastname: 'Lorenzo',
    avatar: 'https://lh4.googleusercontent.com/-WUY2PDwnKZk/AAAAAAAAAAI/AAAAAAAAAAc/1UMlOKImKRA/photo.jpg',
    location: 'sf',
    acl: [],
    createdAt: exports.getTestDate('2018-03-05 11:01:45'),
    updatedAt: exports.getTestDate('2018-03-05 11:01:45')
});
exports.getFileMessage = () => ({
    _id: 'aac1f7ed-ee67-480c-bd0f-8ad5c6d4fc35',
    filename: 'SampleVideo_360x240_1mb.mp4',
    createdById: exports.getUser_1()._id,
    url: 'https://s3-us-west-1.amazonaws.com/attachements-opya/153825960050805725888429932773/SampleVideo_360x240_1mb.mp4',
    signedUrl: 'https://attachements-opya.s3.us-west-1.amazonaws.com/153825960050805725888429932773/SampleVideo_360x240_1mb.mp4?AWSAccessKeyId=AKIAIJ4RCARVQQMXLMGQ&Expires=1538262284&Signature=ZWoodIoMsdQNfscUWVrV9UokaHc%3D',
    mimetype: 'video/mp4',
    size: 1053651,
    metadata: {},
    thumbnailUrl: 'https://s3-us-west-1.amazonaws.com/attachements-opya/153825960050805725888429932773/SampleVideo_360x240_1mb.mp4',
    thumbnailSignedUrl: 'https://attachements-opya.s3.us-west-1.amazonaws.com/153825960050805725888429932773/SampleVideo_360x240_1mb.mp4?AWSAccessKeyId=AKIAIJ4RCARVQQMXLMGQ&Expires=1538262284&Signature=ZWoodIoMsdQNfscUWVrV9UokaHc%3D',
    createdAt: '',
    updatedAt: '',
});
exports.getTag_1 = () => ({
    _id: 1,
    name: 'tag_1',
    description: 'description tag 1'
});
exports.getTag_2 = () => ({
    _id: 2,
    name: 'tag_2'
});
exports.getPost_1 = () => ({
    _id: 1,
    title: 'post title 1',
    post: 'some post text',
    year: 2019,
    month: 10,
    day: 10,
    slug: 'post-title-1',
    user: exports.getUser_1(),
    tags: [exports.getTag_1(), exports.getTag_2()],
    createdAt: exports.getTestDate('2019-10-10 00:00:00'),
    updatedAt: exports.getTestDate('2019-10-10 00:00:00'),
});
exports.getPost_2 = () => ({
    _id: 1,
    title: 'post title two',
    post: 'some post text another',
    year: 2019,
    month: 1,
    day: 9,
    slug: 'post-title-two',
    user: exports.getUser_2(),
    tags: [],
    createdAt: exports.getTestDate('2019-9-1 00:00:00'),
    updatedAt: exports.getTestDate('2019-9-1 00:00:00'),
});
exports.getPostList_1 = () => ([
    exports.getPost_1(), exports.getPost_2()
]);
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