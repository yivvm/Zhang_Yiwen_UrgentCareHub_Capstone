import {
  FETCH_ALL,
  CREATE,
  SET_VISIT_DETAILS,
  UPDATE,
  SET_EDITING_VISIT_ID,
  VISIT_UPDATED,
  DELETE,
} from "../constants/actionTypes";

const initialState = {
  visits: [],
  visitDetails: null,
  editingVisitId: null, // Track the ID of the visit being edited
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        visits: action.payload,
      };
    case CREATE:
      return {
        ...state,
        visits: [...state.visits, action.payload],
      };
    case SET_VISIT_DETAILS:
      return {
        ...state,
        visitDetails: action.payload,
      };
    case UPDATE:
      const updatedVisits = state.visits.map((visit) => {
        if (visit._id === action.payload._id) {
          return {
            ...visit,
            ...action.payload,
          };
        }
        return visit;
      });
      return {
        ...state,
        visits: updatedVisits,
        visitDetails: action.payload,
      };
    case SET_EDITING_VISIT_ID:
      return {
        ...state,
        editingVisitId: action.payload,
      };
    case VISIT_UPDATED:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE:
      return {
        ...state,
        visits: state.visits.filter((visit) => visit._id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
