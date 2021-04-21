export type IEntityMap<T> = { [id: string]: T };

export type Nullable<T> = T | null;

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
  tags?: number[];
  year?: number;
  month?: number;
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

export enum DateFormat {
  DATE,
  DATE_TEXT,
  DATE_MONTH,
  MONTH_YEAR,
  DATE_TIME,
  NUMERIC_DATE,
  DASHED_NUMERIC
}

export const dateFormatMap = {
  [DateFormat.DATE]: 'MMM DD, YYYY',
  [DateFormat.DATE_TEXT]: 'MMMM DD, YYYY',
  [DateFormat.DATE_MONTH]: 'DD MMM',
  [DateFormat.MONTH_YEAR]: 'MMMM YYYY',
  [DateFormat.DATE_TIME]: 'MMM DD, YYYY hh:mm a',
  [DateFormat.NUMERIC_DATE]: 'MM/DD/YYYY',
  [DateFormat.DASHED_NUMERIC]: 'YYYY-MM-DD'
};
