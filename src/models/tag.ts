import { Nullable } from './general';

export interface ITag {
  id?: Nullable<number>;
  name: Nullable<string>;
  description: Nullable<string>;
}

export const getFallbackTag = (): ITag => ({
  id: null,
  name: '',
  description: ''
});
