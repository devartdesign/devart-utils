import { UserModel, TagModel, FileModel, PostModel, AlbumModel, GeneralModel } from '../models';
export declare const getLoginResponse: () => GeneralModel.ILoginResponse;
export declare const getLoading: () => GeneralModel.ILoadingStatus;
export declare const getUser_1: () => UserModel.IUser;
export declare const getUser_2: () => UserModel.IUser;
export declare const getTag_1: () => TagModel.ITag;
export declare const getTag_2: () => TagModel.ITag;
export declare const getPost_1: () => PostModel.IPost;
export declare const getPost_2: () => PostModel.IPost;
export declare const getFile_1: () => Partial<File>;
export declare const getFile_2: () => Partial<File>;
export declare const getFile_3: () => Partial<File>;
export declare const getFile_4: () => Partial<File>;
export declare const getUploadFile_1: () => FileModel.IFile;
export declare const getUploadFile_2: () => FileModel.IFile;
export declare const getUploadFile_3: () => FileModel.IFile;
export declare const getUploadFile_4: () => FileModel.IFile;
export declare const getUploadFile_5: () => FileModel.IFile;
export declare const getAlbum_1: () => AlbumModel.IAlbum;
export declare const getAlbum_2: () => AlbumModel.IAlbum;
export declare const getArchive_1: () => PostModel.IArchivePost;
export declare const getArchive_2: () => PostModel.IArchivePost;
