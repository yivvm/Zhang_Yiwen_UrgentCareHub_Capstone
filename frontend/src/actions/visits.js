import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

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

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    if (error.response && error.response.status === 409) {
      console.log("Visit already exists."); // Log the error
      // Dispatch an action to set an error state in Redux or show an error message
    } else {
      console.log("Error creating visit:", error.message);
      // Handle other types of errors
    }
  }
};

export const updateVisit = (id, visit) => async (dispatch) => {
  try {
    const { data } = await api.updateVisit(id, visit);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteVisit = (id) => async (dispatch) => {
  try {
    await api.deleteVisit(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchPosts();

//     dispatch({ type: FETCH_ALL, payload: data });
//     // const action = { type: "FETCH_ALL", payload: data };
//     // dispatch(action);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: CREATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
