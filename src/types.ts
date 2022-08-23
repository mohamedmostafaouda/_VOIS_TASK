import { Dispatch } from 'redux';

export enum ActionTypes {
  GET_DATA = "GET_DATA",
}

export type Data = {
  id: string;
  month: string;
  camp: string;
  country: string;
  school: string;
  lessons: number;
};

export type Action<T> = {
  type: ActionTypes;
  payload: T;
};

export type DataState = {
  data: Data[],
  countries: string[],
  camps: string[],
  schools: string[],
}

export type AsyncAction = (dispatch: Dispatch) => Promise<void>;