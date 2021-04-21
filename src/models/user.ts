import { Nullable } from './general';

export interface IUser {
  id: Nullable<number>;
  email: Nullable<string>;
  name: Nullable<string>;
}

export const getFallbackUser = ({ email = '', name = '' }: Partial<IUser>): IUser => ({
  id: null,
  email,
  name
});
