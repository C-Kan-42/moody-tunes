import axios from 'axios';

export const getPlaylists = () => {
  return axios.get('/api/playlists')
};

export const getPlaylist = playlistId => {
  return axios.get(`/api/playlists/${playlistId}`)
}

export const postReaction = playlistId => {
  return axios.post(`/api/playlists/${playlistId}/react`)
}

// export const getFollowedPlaylists = (id) => {
//     return axios.get(`/api/playlists/follows/${id}`)
// };   NEST THIS => follows/user/${id}

export const getAllPlaylistReactions = (id) => {
  return axios.get(`/api/playlists/reactions/${id}`);
};