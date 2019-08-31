export interface IPost {
  _id: number;
  title: string;
  post: string;
  year: number;
  month: number;
  day: number;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPostQuery {
  year: number;
  month: number;
  day: number;
  slug: string;
}

export const getFallbackPost = (postQuery?: IPostQuery): IPost => ({
  _id: null,
  title: '...',
  post: '...',
  year: null,
  month: null,
  day: null,
  slug: '...',
  createdAt: null,
  updatedAt: null
});
