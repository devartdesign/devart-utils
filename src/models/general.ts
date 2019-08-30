export enum Entity {
  AUTH = 'auth',
  USER = 'users',
  POST = 'posts',
  TAG = 'tags',
  FILE = 'files',
}

export const Color = {
  PRIMARY: '#1745D5',
  SECONDARY: '#5BC9EB',
  LIGHT_SECONDARY: '#EDFAFF',
  LIGHT_BLUE: '#E7ECFA',
  BLUE_GRAY: '#9FA7BC',
  LIGHT_GRAY: '#F6F6F6',
  DARK_GRAY: '#646565',
  SUPER_DARK_GRAY: '#474b60',
  RESOLVED_GRAY: '#D5DEF1',
  SEPTENARY: '#ECF0F5',
  OCTANARY: '#D5DEF1',
  NONARY: '#C21E5D',
  DENARY: '#00B4EB',
  BLACK: '#0F0F0F',
  WHITE: '#FFFFFF',
  GREEN: '#3AC6AB',
  AVAILABLE_GREEN: '#53C9AC',
  WARN: '#F9F082',
  NEUTRAL: '#C1CEEF',
  PURPLE: '#9186E3',
  DEEP_PURPLE: '#422c45',
  CASE_PURPLE: '#624575',
  SCHEDULE_PURPLE: '#445374',
  FAVORITE: '#FCBF00',
};

export const RegMap = {
  serverMention: /^@(\[.*\](\(.*\)))$/
};

export type IEntityMap<T> = { [id: string]: T };

export type SortDirection = 'ASC' | 'DESC';

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
  fields?: string[];
  baseQuery?: any;
}
