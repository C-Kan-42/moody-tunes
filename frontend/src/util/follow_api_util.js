import axios from "axios";

export const getFollows = () => {
  return axios.get("/api/follows");
};

export const getUserFollows = id => {
  return axios.get(`/api/follows/user/${id}`);
};