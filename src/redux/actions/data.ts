import API from 'api/api';
import { Action, ActionTypes, AsyncAction, Data, FilterActionTypes, FilterType, ToggleGraphTypes } from '@types';
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
  filterActionType: FilterType,
): Action => {
  switch(filterActionType){
    case FilterType.CAMP_FILTER:
      return {type: FilterActionTypes.CHANGE_CAMP, payload: filterValue};
    case FilterType.COUNTRY_FILTER:
      return {type: FilterActionTypes.CHANGE_COUNTRY, payload: filterValue};
    case FilterType.SCHOOL_FILTER:
      return {type: FilterActionTypes.CHANGE_SCHOOL, payload: filterValue}; 
  }
}

export const toggleGraph = (graphName: string, toggleGraphAction: ToggleGraphTypes):Action => {
   switch(toggleGraphAction){
    case ToggleGraphTypes.SHOW_GRAPH:{
      return {
        type: ToggleGraphTypes.SHOW_GRAPH,
        payload: graphName
      }
    }
    case ToggleGraphTypes.HIDE_GRAPH: {
      return {
        type: ToggleGraphTypes.HIDE_GRAPH,
        payload: graphName
      }
    }
   }
}

const getDataSuccess = (data: Data[]): Action => ({
  type: ActionTypes.GET_DATA,
  payload: [...data],
});
