import {
  UserModel,
  TagModel,
  FileModel,
  PostModel
} from '../models';

export const getTestDate = (date: string = '2019-03-05 11:01:45'): Date => new Date(Date.parse(date));

export const getUser_1 = (): UserModel.IUser => ({
  id: 1,
  email: 'rgonzalez@devartdesign.com',
  name: 'Ramiro Gonzalez',
  firstname: 'Ramiro',
  lastname: 'Gonzalez',
  avatar: 'https://lh4.googleusercontent.com/-WUY2PDwnKZk/AAAAAAAAAAI/AAAAAAAAAAc/1UMlOKImKRA/photo.jpg',
  location: 'ar',
  createdAt: getTestDate('2018-05-23 00:00:00'),
  updatedAt: getTestDate('2018-08-20 00:00:00'),
});

export const getUser_2 = (): UserModel.IUser => ({
  id: 2,
  email: 'pepe.lorenzo@devartdesign.com',
  name: 'Pepe Lorenzo',
  firstname: 'Pepe ',
  lastname: 'Lorenzo',
  avatar: 'https://lh4.googleusercontent.com/-WUY2PDwnKZk/AAAAAAAAAAI/AAAAAAAAAAc/1UMlOKImKRA/photo.jpg',
  location: 'sf',
  createdAt: getTestDate('2018-03-05 11:01:45'),
  updatedAt: getTestDate('2018-03-05 11:01:45')
});

export const getUser_3 = (): UserModel.IUser => ({
  id: 3,
  email: 'lorenzo.lamas@devartdesign.com',
  name: 'Lorenzo Lamas',
  firstname: 'Lamas',
  lastname: 'Lorenzo',
  avatar: 'https://lh4.googleusercontent.com/-WUY2PDwnKZk/AAAAAAAAAAI/AAAAAAAAAAc/1UMlOKImKRA/photo.jpg',
  location: 'sf',
  createdAt: getTestDate('2018-03-07 11:05:00'),
  updatedAt: getTestDate('2018-03-07 11:05:00')
});

export const getFileMessage = (): FileModel.IFile => ({
  id: 'aac1f7ed-ee67-480c-bd0f-8ad5c6d4fc35',
  filename: 'SampleVideo_360x240_1mb.mp4',
  createdById: getUser_1().id,
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
  id: 1,
  name: 'tag_1',
  description: 'description tag 1'
});

export const getTag_2 = (): TagModel.ITag => ({
  id: 2,
  name: 'tag_2'
});

export const getPost_1 = (): PostModel.IPost => ({
  id: 1,
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

export const getPost_2 = (): PostModel.IPost => ({
  id: 1,
  title: 'post title two',
  post: 'some post text another',
  year: 2019,
  month: 1,
  day: 9,
  slug: 'post-title-two',
  user: getUser_2(),
  tags: [],
  createdAt: getTestDate('2019-9-1 00:00:00'),
  updatedAt: getTestDate('2019-9-1 00:00:00'),
});

export const getPostList_1 = (): PostModel.IPost[] => ([
  getPost_1(), getPost_2()
]);

export const getArchive_1 = (): PostModel.IArchivePost => ({
  year: 2018,
  month: 8,
  total: 15
});

export const getArchive_2 = (): PostModel.IArchivePost => ({
  year: 2018,
  month: 9,
  total: 2
});
