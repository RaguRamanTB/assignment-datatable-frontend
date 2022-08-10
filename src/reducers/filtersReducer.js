import { UPDATE_FILTERS, UPDATE_CURRENT_PAGE } from "../actions/types";

const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
