import { Dispatch } from 'redux';

export const ShowAllSchools = 'Show All';

export enum Months {
  JAN = 'Jan',
  FEB = 'Feb',
  MAR = 'Mar',
  APR = 'Apr',
  MAY = 'May',
  JUN = 'Jun',
  JUL = 'Jul',
  AUG = 'Aug',
  SEP = 'Sep',
  OCT = 'Oct',
  NOV = 'Nov',
  DEC = 'Dec',
}

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export enum FilterActionTypes {
  CHANGE_SCHOOL = 'CHANGE_SCHOOL',
  CHANGE_CAMP = 'CHANGE_CAMP',
  CHANGE_COUNTRY = 'CHANGE_COUNTRY',
}

export enum ActionTypes {
  GET_DATA = 'GET_DATA',
}

export enum ToggleGraphTypes {
  HIDE_GRAPH = 'HIDE_GRAPH',
  SHOW_GRAPH = 'SHOW_GRAPH',
}

export enum FilterType {
  COUNTRY_FILTER = 'COUNTRY_FILTER',
  CAMP_FILTER = 'CAMP_FILTER',
  SCHOOL_FILTER = 'SCHOOL_FILTER',
}

export type Data = {
  id: string;
  month: keyof Months;
  camp: string;
  country: string;
  school: string;
  lessons: number;
};

export type Action = {
  type: FilterActionTypes | ActionTypes | ToggleGraphTypes;
  payload: any;
};

export type DataState = {
  data: Data[];
  [FilterType.COUNTRY_FILTER]: Filter;
  [FilterType.CAMP_FILTER]: Filter;
  [FilterType.SCHOOL_FILTER]: Filter;
  loaded: boolean;
  hiddenGraphs: string[];
};

export type Filter = {
  data: string[];
  filterValue: string;
};

export type FilterOutput = {
  totalLessons: number;
  campName: string;
  schoolLessons: Map<string, number>;
  schoolGraph: Map<string, Map<keyof Months, number>>;
};

export type AsyncAction = (dispatch: Dispatch) => Promise<void>;
