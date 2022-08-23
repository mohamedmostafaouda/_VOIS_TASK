import { Dispatch } from 'redux';

export enum ActionTypes {
  GET_DATA = 'GET_DATA',
}

export enum FilterActionTypes {
  CHANGE_SCHOOL = 'CHANGE_SCHOOL',
  CHANGE_CAMP = 'CHANGE_CAMP',
  CHANGE_COUNTRY = 'CHANGE_COUNTRY',
}

export enum FilterType {
  COUNTRY_FILTER = 'COUNTRY_FILTER',
  CAMP_FILTER = 'CAMP_FILTER',
  SCHOOL_FILTER = 'SCHOOL_FILTER',
}

export type Data = {
  id: string;
  month: string;
  camp: string;
  country: string;
  school: string;
  lessons: number;
};

export type Action<T,K> = {
  type: K;
  payload: T;
};

export type DataState = {
  data: Data[];
  [FilterType.COUNTRY_FILTER]: Filter;
  [FilterType.CAMP_FILTER]: Filter;
  [FilterType.SCHOOL_FILTER]: Filter;
  loaded: boolean;
};

export type Filter = {
  data: string[];
  filterValue: string;
};

export type AsyncAction = (dispatch: Dispatch) => Promise<void>;
