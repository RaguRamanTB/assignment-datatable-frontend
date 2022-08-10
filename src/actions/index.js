import countries from "../apis/countries";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILED,
  FETCH_COUNTRIES_LOADING,
  UPDATE_FILTERS,
} from "./types";

export const fetchCountries =
  (limit, offset, sortBy, orderBy) => async (dispatch) => {
    dispatch({ type: FETCH_COUNTRIES_LOADING });
    countries
      .get(`/countries/${limit}-${offset}/${sortBy}-${orderBy}`)
      .then((response) => {
        dispatch({
          type: FETCH_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: FETCH_COUNTRIES_FAILED,
          payload: "Error occurred while loading countries, please try again.",
        });
      });
  };

export const updateFilters = (filters) => async (dispatch) => {
  dispatch({
    type: UPDATE_FILTERS,
    payload: filters,
  });
};
