import axios from 'axios';

export const getSong = (id) => {
  return axios.get(`/api/songs/${id}`)
};

export const getPlaylistSongs = (playlistId) => {
  return axios.get(`/api/playlists/${playlistId}`)
}

