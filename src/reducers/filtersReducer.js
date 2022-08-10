import { UPDATE_FILTERS } from "../actions/types";

const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
