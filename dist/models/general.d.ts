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
    tags?: number[];
    year?: number;
    month?: number;
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
export declare enum DateFormat {
    DATE = 0,
    DATE_TEXT = 1,
    DATE_MONTH = 2,
    MONTH_YEAR = 3,
    DATE_TIME = 4,
    NUMERIC_DATE = 5,
    DASHED_NUMERIC = 6
}
export declare const dateFormatMap: {
    [DateFormat.DATE]: string;
    [DateFormat.DATE_TEXT]: string;
    [DateFormat.DATE_MONTH]: string;
    [DateFormat.MONTH_YEAR]: string;
    [DateFormat.DATE_TIME]: string;
    [DateFormat.NUMERIC_DATE]: string;
    [DateFormat.DASHED_NUMERIC]: string;
};
