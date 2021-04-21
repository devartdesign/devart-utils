import { Nullable } from './general';

export interface IUser {
  id: Nullable<number>;
  email: Nullable<string>;
  name: Nullable<string>;
}

export const getFallbackUser = (): IUser => ({
  id: null,
  email: null,
  name: null
});
