import { Nullable } from './general';
export interface IUser {
    id: Nullable<number>;
    email: Nullable<string>;
    name: Nullable<string>;
}
export declare const getFallbackUser: (user?: Partial<IUser>) => IUser;
