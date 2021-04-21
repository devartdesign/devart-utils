import {
  UserModel,
  TagModel,
  FileModel,
  PostModel,
  AlbumModel,
  GeneralModel
} from '../models';

export const getLoginResponse = (): GeneralModel.ILoginResponse => ({
  token: 'token-string'
});

export const getLoading = (): GeneralModel.ILoadingStatus => ({
  isLoading: false,
  hasError: false,
  error: null
});

export const getUser_1 = (): UserModel.IUser => ({
  id: 1,
  email: 'rgonzalez@devartdesign.com',
  name: 'Ramiro',
});

export const getTag_1 = (): TagModel.ITag => ({
  id: 1,
  name: 'tag name',
  description: 'tag description'
})

export const getPost_1 = (): PostModel.IPost => ({
  id: 1,
  title: 'post title',
  post: 'post content',
  year: 2021,
  month: 4,
  day: 16,
  slug: 'post-title',
  tags: [],
  user: getUser_1(),
  isPublished: true,
  created_at: '2021-04-18',
  updated_at: '2021-04-18',
});

export const getPost_2 = (): PostModel.IPost => ({
  id: 2,
  title: 'post title 2',
  post: 'post content 2',
  year: 2021,
  month: 4,
  day: 15,
  slug: 'post-title-2',
  tags: [getTag_1()],
  user: getUser_1(),
  isPublished: false,
  created_at: '2021-04-18',
  updated_at: '2021-04-18'
});

export const getFile_1 = (): Partial<File> => ({
  name: 'test.png',
  size: 13290,
  type: 'images/png'
});

export const getFile_2 = (): Partial<File> => ({
  name: 'test-2.jpg',
  size: 12902,
  type: 'images/jpeg'
});

export const getFile_3 = (): Partial<File> => ({
  name: 'test.exe',
  size: 400,
  type: 'executable'
});

export const getFile_4 = (): Partial<File> => ({
  name: 'test.png',
  size: 237812932102,
  type: 'executable'
});

export const getUploadFile_1 = (): FileModel.IFile => ({
  ...FileModel.getFallbackFile(getFile_1() as any, 'test-upload-id'),
  id: 'upload-id-1',
  status: 0
});

export const getUploadFile_2 = (): FileModel.IFile => ({
  ...FileModel.getFallbackFile(getFile_2() as any, 'test-upload-id'),
  id: 'upload-id-2',
  status: FileModel.FileStatus.PROGRESS
});

export const getUploadFile_3 = (): FileModel.IFile => ({
  ...FileModel.getFallbackFile(getFile_2() as any, 'test-upload-id'),
  id: 'upload-id-3',
  progress: 100,
  status: FileModel.FileStatus.FAIL
});

export const getUploadFile_4 = (): FileModel.IFile => ({
  ...FileModel.getFallbackFile(getFile_3() as any, 'test-upload-id'),
  id: 'upload-id-4',
  progress: 0,
  status: FileModel.FileStatus.FAIL,
  error: 'Server Error'
});

export const getUploadFile_5 = (): FileModel.IFile => ({
  ...FileModel.getFallbackFile(getFile_4() as any, 'test-upload-id'),
  id: 'upload-id-5',
  progress: 0,
  status: FileModel.FileStatus.INACTIVE,
  error: null
});

export const getAlbum_1 = (): AlbumModel.IAlbum => ({
  id: 1,
  title: 'album 1',
  dirName: 'path/to/album',
  description: 'description',
  date: '2021-10-10',
  images: []
});
