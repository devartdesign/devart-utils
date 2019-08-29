"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment-timezone");
const models_1 = require("../models");
exports.getTestDate = (date = '2019-03-05 11:01:45') => moment(date).tz('America/Los_Angeles').toDate();
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
    _id: '5521-47bb-9164e4c4-97fd-6521x-8123j921',
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
    _id: '9164e4c4-6521-47bb-97fd-c75ac02b2cf5',
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
    createdAt: exports.getTestDate('2019-10-10 00:00:00'),
    updatedAt: exports.getTestDate('2019-10-10 00:00:00'),
});
//# sourceMappingURL=entities.js.map