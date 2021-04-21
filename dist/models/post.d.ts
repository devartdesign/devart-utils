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
export declare const getFallbackPost: (post?: Partial<IPost>) => IPost;
