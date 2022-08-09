import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILED,
  FETCH_COUNTRIES_LOADING,
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

    default:
      return state;
  }
};

export default countriesReducer;
