import axios from 'axios';

export const getPlaylists = () => {
    return axios.get('/api/playlists')
};

export const getPlaylist = (playlist_id) => {
  return axios.get(`/api/playlists/${playlist_id}`)
}

// export const getFollowedPlaylists = (id) => {
//     return axios.get(`/api/playlists/follows/${id}`)
// };   NEST THIS => follows/user/${id}

export const getAllPlaylistReactions = (id) => {
  return axios.get(`/api/playlists/reactions/${id}`);
};