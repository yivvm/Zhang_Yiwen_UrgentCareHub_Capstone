import axios from "axios";

const url = "http://localhost:5100/visits";

export const fetchVisits = () => axios.get(url);
export const createVisit = (newVisit) => {
  // console.log("newVisit from api/index", newVisit);
  axios.post(url, newVisit);
};
export const updateVisit = (id, updatedVisit) =>
  axios.patch(`${url}/${id}`, updatedVisit);
export const deleteVisit = (id) => axios.delete(`${url}/${id}`);
