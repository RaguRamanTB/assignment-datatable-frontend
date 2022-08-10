import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILED,
  FETCH_COUNTRIES_LOADING,
  FETCH_COUNTRY_COUNT,
  FETCH_COUNTRY_COUNT_FAILED,
  FETCH_COUNTRY_COUNT_LOADING,
  UPDATE_FILTERED_COUNTRIES,
} from "../actions/types";

const countriesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_LOADING:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };

    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
        loaded: true,
        error: null,
      };

    case FETCH_COUNTRIES_FAILED:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload,
      };

    case FETCH_COUNTRY_COUNT_LOADING:
      return {
        ...state,
        countLoading: true,
        countLoaded: false,
        countError: null,
      };

    case FETCH_COUNTRY_COUNT:
      return {
        ...state,
        count: action.payload.count,
        countLoading: false,
        countLoaded: true,
        countError: null,
      };

    case FETCH_COUNTRY_COUNT_FAILED:
      return {
        ...state,
        countLoading: false,
        countLoaded: true,
        countError: action.payload,
      };

    case UPDATE_FILTERED_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };

    default:
      return state;
  }
};

export default countriesReducer;
