import axios from 'axios';

export const getPlaylists = () => {
  return axios.get('/api/playlists')
};

export const getPlaylist = playlistId => {
  return axios.get(`/api/playlists/${playlistId}`)
}

export const postReaction = (reactionData) => {
  return axios.patch(`/api/playlists/${reactionData.id}/react`, reactionData)
}

// export const getFollowedPlaylists = (id) => {
//     return axios.get(`/api/playlists/follows/${id}`)
// };   NEST THIS => follows/user/${id}

export const getAllPlaylistReactions = (id) => {
  return axios.get(`/api/playlists/reactions/${id}`);
};