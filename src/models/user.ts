import { Nullable } from './general';

export interface IUser {
  id: Nullable<number>;
  email: Nullable<string>;
  name: Nullable<string>;
}

export const getFallbackUser = (user: Partial<IUser> = { email: '', name: '' }): IUser => ({
  id: null,
  email: user.email,
  name: user.name
});
