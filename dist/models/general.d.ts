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
    LIGHT_SECONDARY: string;
    LIGHT_BLUE: string;
    BLUE_GRAY: string;
    LIGHT_GRAY: string;
    DARK_GRAY: string;
    SUPER_DARK_GRAY: string;
    RESOLVED_GRAY: string;
    SEPTENARY: string;
    OCTANARY: string;
    NONARY: string;
    DENARY: string;
    BLACK: string;
    WHITE: string;
    GREEN: string;
    AVAILABLE_GREEN: string;
    WARN: string;
    NEUTRAL: string;
    PURPLE: string;
    DEEP_PURPLE: string;
    CASE_PURPLE: string;
    SCHEDULE_PURPLE: string;
    FAVORITE: string;
};
export declare const RegMap: {
    serverMention: RegExp;
};
export declare type IEntityMap<T> = {
    [id: string]: T;
};
export declare type ISort = {
    [key: string]: 'asc' | 'desc';
};
export interface IPagination<T> {
    count: number;
    page: number;
    limit: number;
    totalPages: number;
    docs: T[];
}
export interface IApiQuery {
    page: number;
    limit: number;
    q?: {
        [key: string]: any;
    };
    sort?: {
        [key: string]: 'asc' | 'desc';
    };
    fields?: string;
    orFields?: string;
    [customQueryParam: string]: any;
}
