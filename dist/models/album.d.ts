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
export declare const getFallbackAlbum: () => IAlbum;
export declare const getFallbackAlbumImage: () => IAlbumImage;
