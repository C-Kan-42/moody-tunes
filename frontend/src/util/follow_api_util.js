import axios from "axios";

// export const getFollows = () => {
//   return axios.get("/api/follows");
// };

export const getUserFollows = id => {
  return axios.get(`/api/follows/user/${id}`);
};

export const postFollow = (followData) => {
  return axios.post(`/api/follows/${followData.id}`, followData.follow)
};

export const destroyFollow = followId => {
  return axios.delete(`/api/follows/${followId}`)
};