import { Nullable } from './general';
export interface IUser {
    id: Nullable<number>;
    email: Nullable<string>;
    name: Nullable<string>;
}
export declare const getFallbackUser: ({ email, name }: Partial<IUser>) => IUser;
