export enum ACL {
  ADMIN = 'admin',
}

export interface IRole {
  _id: string;
  value: string;
  short: string;
}

export interface IUser {
  _id: number;
  email: string;
  name: string;
  avatar: string;
  location: string;
  firstname: string;
  lastname: string;
  acl: ACL[];
  blocked?: boolean;
  createdAt: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
}

export const getFallbackUser = (_id?: number): IUser => ({
  _id,
  avatar: 'https://www.fluigent.com/wp-content/uploads/2018/07/default-avatar-BW.png',
  email: '...',
  location: '...',
  acl: [],
  createdAt: null,
  updatedAt: null,
  deletedAt: null,
  name: '...',
  firstname: '...',
  lastname: '...',
});
