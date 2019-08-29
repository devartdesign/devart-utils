export declare enum ACL {
    ADMIN = "admin"
}
export interface IRole {
    _id: string;
    value: string;
    short: string;
}
export interface IUser {
    _id: string;
    email: string;
    name: string;
    avatar: string;
    location: string;
    firstname: string;
    lastname: string;
    acl: ACL[];
    blocked?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}
export declare const getFallbackUser: (_id?: string) => IUser;
