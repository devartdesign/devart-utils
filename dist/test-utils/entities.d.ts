import { UserModel, TagModel, FileModel, PostModel } from '../models';
export declare const getTestDate: (date?: string | Date) => Date;
export declare const getRole_1: () => UserModel.IRole;
export declare const getRole_2: () => UserModel.IRole;
export declare const getUser_1: () => UserModel.IUser;
export declare const getUser_2: () => UserModel.IUser;
export declare const getFileMessage: () => FileModel.IFile;
export declare const getTag_1: () => TagModel.ITag;
export declare const getTag_2: () => TagModel.ITag;
export declare const getPost_1: () => PostModel.IPost;
export declare const getPost_2: () => PostModel.IPost;
export declare const getPostList_1: () => PostModel.IPost[];
export declare const getArchive_1: () => PostModel.IArchivePost;
export declare const getArchive_2: () => PostModel.IArchivePost;
