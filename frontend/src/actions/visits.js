import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  SET_VISIT_DETAILS,
  UPDATE,
  SET_EDITING_VISIT_ID,
  VISIT_UPDATED,
  DELETE,
} from "../constants/actionTypes";

// Action Creators - functions that returns actions (type, payload)
export const getVisits = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVisits();

    dispatch({ type: FETCH_ALL, payload: data });
    // const action = { type: "FETCH_ALL", payload: data };
    // dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createVisit = (visit) => async (dispatch) => {
  try {
    const { data } = await api.createVisit(visit);

    // console.log("Data from actions/visits: ", data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    if (error.response && error.response.status === 409) {
      console.log("Visit already exists.", error.message); // Log the error
      // Dispatch an action to set an error state in Redux or show an error message
    } else {
      console.log("Error creating visit:", error.message);
      // Handle other types of errors
    }
  }
};

export const fetchVisitDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchVisitDetails(id);

    dispatch({ type: SET_VISIT_DETAILS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateVisit = (id, visit) => async (dispatch) => {
  try {
    const { data } = await api.updateVisit(id, visit);

    dispatch({ type: UPDATE, payload: data });
    dispatch({ type: VISIT_UPDATED }); // Dispatch visit update action
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const setEditingVisitId = (id) => {
  return {
    type: SET_EDITING_VISIT_ID,
    payload: id,
  };
};

export const deleteVisit = (id) => async (dispatch) => {
  try {
    await api.deleteVisit(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
