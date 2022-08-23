import {
  Action,
  ActionTypes,
  Data,
  DataState,
  Filter,
  FilterActionTypes,
  FilterType,
} from '@types';
import { filterCamps, filterSchools } from '@utils';

const initialFilterValue: Filter = {
  data: [],
  filterValue: '',
};

const initialState: DataState = {
  data: [],
  [FilterType.COUNTRY_FILTER]: initialFilterValue,
  [FilterType.CAMP_FILTER]: initialFilterValue,
  [FilterType.SCHOOL_FILTER]: initialFilterValue,
  loaded: false,
};

export const dataReducer = (state = initialState, action: any): DataState => {
  switch (action.type) {
    case ActionTypes.GET_DATA: {
      const data: Data[] = action.payload;
      const defaultCountryFilter: Filter = {
        data: Array.from(new Set(data.map((e) => e.country))),
        filterValue: data[0].country,
      };

      const defaultCampFilter: Filter = filterCamps(data, {
        country: defaultCountryFilter.filterValue,
      });

      const defaultSchoolFilter: Filter = filterSchools(data, {
        country: defaultCountryFilter.filterValue,
        camp: defaultCampFilter.filterValue,
      });

      return {
        data: data,
        loaded: true,
        [FilterType.COUNTRY_FILTER]: defaultCountryFilter,
        [FilterType.CAMP_FILTER]: defaultCampFilter,
        [FilterType.SCHOOL_FILTER]: defaultSchoolFilter,
      };
    }

    case FilterActionTypes.CHANGE_COUNTRY: {
      const currentCampValue = state[FilterType.CAMP_FILTER].filterValue;
      const currentSchool = state[FilterType.SCHOOL_FILTER].filterValue;
      const countryFilter = { ...state.COUNTRY_FILTER, filterValue: action.payload };
      const campFilter = filterCamps(
        state.data,
        { country: countryFilter.filterValue },
        currentCampValue,
      );
      const schoolFilter = filterSchools(
        state.data,
        {
          country: countryFilter.filterValue,
          camp: campFilter.filterValue,
        },
        currentSchool,
      );

      return {
        ...state,
        [FilterType.COUNTRY_FILTER]: countryFilter,
        [FilterType.CAMP_FILTER]: campFilter,
        [FilterType.SCHOOL_FILTER]: schoolFilter,
      };
    }

    case FilterActionTypes.CHANGE_CAMP: {
      const currentSchoolValue = state[FilterType.SCHOOL_FILTER].filterValue;
      const campFilter = { ...state[FilterType.CAMP_FILTER], filterValue: action.payload };
      const schoolFilter = filterSchools(
        state.data,
        {
          country: state[FilterType.COUNTRY_FILTER].filterValue,
          camp: campFilter.filterValue,
        },
        currentSchoolValue,
      );

      return {
        ...state,
        [FilterType.CAMP_FILTER]: campFilter,
        [FilterType.SCHOOL_FILTER]: schoolFilter,
      };
    }

    case FilterActionTypes.CHANGE_SCHOOL: {
      return {
        ...state,
        [FilterType.SCHOOL_FILTER]: {
          ...state[FilterType.SCHOOL_FILTER],
          filterValue: action.payload,
        },
      };
    }

    default:
      return initialState;
  }
};
