import { Nullable } from './general';

export interface IAlbumImage {
  id: Nullable<number>;
  name: Nullable<string>;
  mimeType: Nullable<string>;
  size: Nullable<number>;
  path: Nullable<string>;
  album_id: Nullable<number>;
}

export interface IAlbum {
  id?: Nullable<number>;
  title: Nullable<string>;
  dirName: Nullable<string>;
  description: Nullable<string>;
  date: Nullable<string>;
  images: IAlbumImage[];
}

export interface IAlbumCreate {
  title: string;
  description: string;
  date: string;
}

export interface IAlbumQuery {
  title: number;
  slug: string;
}

export const getFallbackAlbum = (): IAlbum => ({
  id: null,
  title: null,
  dirName: null,
  description: null,
  date: null,
  images: []
});

export const getFallbackAlbumImage = (album: Partial<IAlbumImage> = { name: '' }): IAlbumImage => ({
  id: null,
  name: album.name,
  mimeType: null,
  size: null,
  path: null,
  album_id: null
});
