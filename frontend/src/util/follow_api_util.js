import axios from "axios";

// export const getFollows = () => {
//   return axios.get("/api/follows");
// };

export const getUserFollows = id => {
  return axios.get(`/api/follows/user/${id}`);
};

export const postFollow = (followData) => {
  return axios.post(`/api/follows/${followData.playlistId}`, followData)
};

export const destroyFollow = (followData) => {
  return axios.delete(`/api/follows/${followData.playlistId}`, followData)
};