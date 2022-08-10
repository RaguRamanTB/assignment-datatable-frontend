import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import filtersReducer from "./filtersReducer";

export default combineReducers({
  countries: countriesReducer,
  filters: filtersReducer,
});
