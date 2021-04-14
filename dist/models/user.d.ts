export interface IUser {
    id: number;
    email: string;
    name: string;
    avatar: string;
    location: string;
    firstname: string;
    lastname: string;
    blocked?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
}
export declare const getFallbackUser: (id?: number) => IUser;
