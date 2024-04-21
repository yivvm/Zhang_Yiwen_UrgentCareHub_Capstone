import axios from "axios";

const url = "http://localhost:5001/visits";

export const fetchVisits = () => axios.get(url);
export const createVisit = (newPost) => axios.post(url, newVisit);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updateVisit = (id, updatedVisit) =>
  axios.patch(`${url}/${id}`, updatedVisit);
export const deleteVisit = (id) => axios.delete(`${url}/${id}`);
