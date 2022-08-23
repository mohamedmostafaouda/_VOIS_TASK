import { ActionTypes, Data, DataState } from '@types';

const initialState: DataState = {
  data: [],
  countries: [],
  camps: [],
  schools: [],
};

export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_DATA: {
      const data: DataState = {
        data: action.payload,
        countries: action.payload.map((e: Data) => e.country),
        camps: action.payload.map((e: Data) => e.camp),
        schools: action.payload.map((e: Data) => e.school),
      };

      return data;
    }

    default:
      return initialState;
  }
};
