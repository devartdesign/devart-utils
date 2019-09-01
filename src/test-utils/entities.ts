import * as moment from 'moment-timezone';

import {
  UserModel,
  TagModel,
  FileModel,
  PostModel
} from '../models';

export const getTestDate = (date: Date | string = '2019-03-05 11:01:45'): Date => moment(date).tz('America/Los_Angeles').toDate();

export const getRole_1 = (): UserModel.IRole => ({
  _id: 'general',
  value: 'general',
  short: 'GE'
});

export const getRole_2 = (): UserModel.IRole => ({
  _id: 'speech',
  value: 'Speech Therapist',
  short: 'ST'
});

export const getUser_1 = (): UserModel.IUser => ({
  _id: '5521-47bb-9164e4c4-97fd-6521x-8123j921',
  email: 'rgonzalez@devartdesign.com',
  name: 'Ramiro Gonzalez',
  firstname: 'Ramiro',
  lastname: 'Gonzalez',
  avatar: 'https://lh4.googleusercontent.com/-WUY2PDwnKZk/AAAAAAAAAAI/AAAAAAAAAAc/1UMlOKImKRA/photo.jpg',
  location: 'ar',
  acl: [UserModel.ACL.ADMIN],
  createdAt: getTestDate('2018-05-23 00:00:00'),
  updatedAt: getTestDate('2018-08-20 00:00:00'),
});

export const getUser_2 = (): UserModel.IUser => ({
  _id: '9164e4c4-6521-47bb-97fd-c75ac02b2cf5',
  email: 'pepe.lorenzo@devartdesign.com',
  name: 'Pepe Lorenzo',
  firstname: 'Pepe ',
  lastname: 'Lorenzo',
  avatar: 'https://lh4.googleusercontent.com/-WUY2PDwnKZk/AAAAAAAAAAI/AAAAAAAAAAc/1UMlOKImKRA/photo.jpg',
  location: 'sf',
  acl: [],
  createdAt: getTestDate('2018-03-05 11:01:45'),
  updatedAt: getTestDate('2018-03-05 11:01:45')
});

export const getFileMessage = (): FileModel.IFile => ({
  _id: 'aac1f7ed-ee67-480c-bd0f-8ad5c6d4fc35',
  filename: 'SampleVideo_360x240_1mb.mp4',
  createdById: getUser_1()._id,
  url: 'https://s3-us-west-1.amazonaws.com/attachements-opya/153825960050805725888429932773/SampleVideo_360x240_1mb.mp4',
  signedUrl: 'https://attachements-opya.s3.us-west-1.amazonaws.com/153825960050805725888429932773/SampleVideo_360x240_1mb.mp4?AWSAccessKeyId=AKIAIJ4RCARVQQMXLMGQ&Expires=1538262284&Signature=ZWoodIoMsdQNfscUWVrV9UokaHc%3D', // tslint:disable-line
  mimetype: 'video/mp4',
  size: 1053651,
  metadata: {},
  thumbnailUrl: 'https://s3-us-west-1.amazonaws.com/attachements-opya/153825960050805725888429932773/SampleVideo_360x240_1mb.mp4',
  thumbnailSignedUrl: 'https://attachements-opya.s3.us-west-1.amazonaws.com/153825960050805725888429932773/SampleVideo_360x240_1mb.mp4?AWSAccessKeyId=AKIAIJ4RCARVQQMXLMGQ&Expires=1538262284&Signature=ZWoodIoMsdQNfscUWVrV9UokaHc%3D', // tslint:disable-line
  createdAt: '',
  updatedAt: '',
});

export const getTag_1 = (): TagModel.ITag => ({
  _id: 1,
  name: 'tag_1',
  description: 'description tag 1'
});

export const getTag_2 = (): TagModel.ITag => ({
  _id: 2,
  name: 'tag_2'
});

export const getPost_1 = (): PostModel.IPost => ({
  _id: 1,
  title: 'post title 1',
  post: 'some post text',
  year: 2019,
  month: 10,
  day: 10,
  slug: 'post-title-1',
  user: getUser_1(),
  tags: [getTag_1(), getTag_2()],
  createdAt: getTestDate('2019-10-10 00:00:00'),
  updatedAt: getTestDate('2019-10-10 00:00:00'),
});
