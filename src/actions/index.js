import countries from "../apis/countries";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILED,
  FETCH_COUNTRIES_LOADING,
  UPDATE_FILTERS,
  FETCH_COUNTRY_COUNT,
  FETCH_COUNTRY_COUNT_FAILED,
  FETCH_COUNTRY_COUNT_LOADING,
  UPDATE_CURRENT_PAGE,
  UPDATE_FILTERED_COUNTRIES,
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

export const fetchCountryCount = () => async (dispatch) => {
  dispatch({ type: FETCH_COUNTRY_COUNT_LOADING });
  countries
    .get(`/countries/`)
    .then((response) => {
      dispatch({
        type: FETCH_COUNTRY_COUNT,
        payload: response.data[0],
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_COUNTRY_COUNT_FAILED,
        payload:
          "Error occurred while loading the count of countries, please try again.",
      });
    });
};

export const updateCurrentPage = (pageNumber) => async (dispatch) => {
  dispatch({
    type: UPDATE_CURRENT_PAGE,
    payload: pageNumber,
  });
};

export const updateFilteredCountries =
  (filteredCountries) => async (dispatch) => {
    dispatch({
      type: UPDATE_FILTERED_COUNTRIES,
      payload: filteredCountries,
    });
  };
