import API from 'api/api';
import { Action, ActionTypes, AsyncAction, Data, FilterActionTypes, FilterType } from '@types';
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

export const changeFilter = (
  filterValue: string,
  FilterActionType: FilterType,
): Action<string, FilterActionTypes> => {
  switch(FilterActionType){
    case FilterType.CAMP_FILTER:
      return {type: FilterActionTypes.CHANGE_CAMP, payload: filterValue};
    case FilterType.COUNTRY_FILTER:
      return {type: FilterActionTypes.CHANGE_COUNTRY, payload: filterValue};
    case FilterType.SCHOOL_FILTER:
      return {type: FilterActionTypes.CHANGE_SCHOOL, payload: filterValue}; 
  }
}

const getDataSuccess = (data: Data[]): Action<Data[], ActionTypes> => ({
  type: ActionTypes.GET_DATA,
  payload: [...data],
});
