import API from 'api/api';
import { Action, ActionTypes, AsyncAction, Data } from '@types';
import { Dispatch } from 'redux';

const api: API = new API();

export const getData = (): AsyncAction => {
  return (dispatch: Dispatch) => {
    return api
      .fetchData()
      .then((res: Response) => res.json())
      .then((data: Data[]) => {
        dispatch(getDataSuccess(data));
      });
  };
};

const getDataSuccess = (data: Data[]): Action<Data[]> => ({
  type: ActionTypes.GET_DATA,
  payload: [...data],
});
