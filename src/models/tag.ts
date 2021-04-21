import { ArgumentOutOfRangeError } from 'rxjs';
import { Nullable } from './general';

export interface ITag {
  id?: Nullable<number>;
  name: Nullable<string>;
  description: Nullable<string>;
}

export const getFallbackTag = (tag: Partial<ITag> = { name: '', description: '' }): ITag => ({
  id: null,
  name: tag.name,
  description: tag.description
});
