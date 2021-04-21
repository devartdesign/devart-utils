import { Nullable } from './general';
export interface ITag {
    id?: Nullable<number>;
    name: Nullable<string>;
    description: Nullable<string>;
}
export declare const getFallbackTag: (tag?: Partial<ITag>) => ITag;
