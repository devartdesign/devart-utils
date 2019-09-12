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
  WHITE: '#FFFFFF',
  GRAY: '#EEEEEE',
  LIGHT_GRAY: '#F5F5F6',
  DARK_GRAY: '#646565',
  BLUE_GRAY: '#9FA7BC',
  RED_LIGHT: '#f44336'
};

export type IEntityMap<T> = { [id: number]: T };

export type SortDirection = 'asc' | 'desc';

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
