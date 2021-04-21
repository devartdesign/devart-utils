import { Nullable } from './general';
import { ITag } from './tag';
import { IUser } from './user';

export interface IPost {
  id?: Nullable<number>;
  title: string;
  post: string;
  year: Nullable<number>;
  month: Nullable<number>;
  day: Nullable<number>;
  slug: Nullable<string>;
  tags: ITag[];
  user: Nullable<IUser>;
  isPublished: boolean;
  created_at: string;
  updated_at: string;
}

export interface IPostRequest {
  id?: Nullable<number>;
  title: string;
  post: string;
  tags: ITag[];
  isPublished: boolean;
}

export interface IPostQuery {
  year: string;
  month: string;
  day: string;
  slug: string;
}

export interface IArchivePost {
  year: number;
  month: number;
  total: number;
}

export const getFallbackPost = (post: Partial<IPost> = {
  title: '',
  post: '',
  slug: '',
  user: null,
}): IPost => ({
  id: null,
  title: post.title,
  post: post.post,
  year: null,
  month: null,
  day: null,
  slug: post.slug,
  tags: [],
  user: post.user,
  isPublished: false,
  created_at: null,
  updated_at: null
});
