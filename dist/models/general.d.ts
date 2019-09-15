export declare enum Entity {
    AUTH = "auth",
    USER = "users",
    POST = "posts",
    TAG = "tags",
    FILE = "files"
}
export declare const Color: {
    PRIMARY: string;
    SECONDARY: string;
    THERNARY: string;
    WHITE: string;
    GRAY: string;
    LIGHT_GRAY: string;
    DARK_GRAY: string;
    BLUE_GRAY: string;
    RED_LIGHT: string;
    GREEN: string;
    FAVORITE: string;
    NONARY: string;
};
export declare type IEntityMap<T> = {
    [id: number]: T;
};
export declare type SortDirection = 'asc' | 'desc';
export interface IPagination<T> {
    count: number;
    page: number;
    limit: number;
    totalPages: number;
    docs: T[];
}
export interface IApiQuery {
    page?: number;
    limit?: number;
    query?: string;
    sortBy?: string;
    sortDirection?: SortDirection;
    searchQuery?: string;
    fields?: string[];
    baseQuery?: any;
}
export interface ILoginResponse {
    token: string;
}
