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
    [id: string]: T;
};
export declare type Nullable<T> = T | null;
export declare enum ToastType {
    SUCCESS = "success",
    WARN = "warning",
    ERROR = "error",
    INFO = "info"
}
export interface IPagination<T> {
    items: T[];
    page: number;
    limit: number;
    total: number;
}
export declare type OrderType = 'asc' | 'desc';
export interface IApiQuery {
    page?: number;
    limit?: number;
    query?: string;
    sort?: string;
    order?: OrderType;
}
export interface IOptionRequest {
    method: string;
    body?: any;
    query?: IApiQuery;
    headers?: {
        [key: string]: any;
    };
}
export interface ILoadingStatus {
    isLoading: boolean;
    hasError: boolean;
    error: any;
    traceId?: string;
}
export interface ILoginResponse {
    token: string;
}
export interface ILoginRequest {
    username: string;
    password: string;
}
