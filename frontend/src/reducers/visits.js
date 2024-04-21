import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const reducer = (visits = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...visits, action.payload];
    case UPDATE:
      return visits.map((visit) =>
        visit._id === action.payload._id ? action.payload : visit
      );
    case DELETE:
      return visits.filter((visit) => visit._id !== action.payload);
    default:
      return visits;
  }
};

export default reducer;
