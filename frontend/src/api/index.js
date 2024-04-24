import axios from "axios";

// const url = "http://localhost:5100/visits";
const url = "https://zhang-yiwen-urgentcarehub-capstone.onrender.com/visits";

export const fetchVisits = () => axios.get(url);
export const createVisit = (newVisit) => {
  // console.log("newVisit from api/index", newVisit);
  return axios.post(url, newVisit);
};
export const fetchVisitDetails = (id) => axios.get(`${url}/${id}`);
export const updateVisit = (id, updatedVisit) =>
  axios.patch(`${url}/${id}`, updatedVisit);
export const deleteVisit = (id) => axios.delete(`${url}/${id}`);
