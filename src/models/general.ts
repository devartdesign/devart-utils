export enum Entity {
  AUTH = 'auth',
  USER = 'users',
  POST = 'posts',
  TAG = 'tags',
  FILE = 'files',
}

export const Color = {
  PRIMARY: '#29434e',
  SECONDARY: '#E1E2E1',
  THERNARY: '#546e7a',
  WHITE: '#FFFFFF',
  GRAY: '#EEEEEE',
  LIGHT_GRAY: '#F5F5F6',
  DARK_GRAY: '#646565',
  BLUE_GRAY: '#9FA7BC',
  RED_LIGHT: '#f44336',
  GREEN: '#3AC6AB',
  FAVORITE: '#FCBF00',
  NONARY: '#C21E5D',
};
export type IEntityMap<T> = { [id: string]: T };

export type Nullable<T> = T | null;

export enum ToastType {
  SUCCESS = 'success',
  WARN = 'warning',
  ERROR = 'error',
  INFO = 'info'
}

export interface IPagination<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
}

export type OrderType = 'asc' | 'desc';

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
  headers?: { [key: string]: any };
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
