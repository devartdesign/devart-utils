export interface IUser {
  id: number;
  email: string;
  name: string;
  avatar: string;
  location: string;
  firstname: string;
  lastname: string;
  blocked?: boolean;
  createdAt: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
}

export const getFallbackUser = (id?: number): IUser => ({
  id,
  avatar: 'https://www.fluigent.com/wp-content/uploads/2018/07/default-avatar-BW.png',
  email: '...',
  location: '...',
  createdAt: null,
  updatedAt: null,
  deletedAt: null,
  name: '...',
  firstname: '...',
  lastname: '...',
});
