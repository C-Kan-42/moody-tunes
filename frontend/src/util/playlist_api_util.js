import axios from 'axios';

export const getPlaylists = () => {
    return axios.get('/api/playlists')
};

export const getFollowedPlaylists = (id) => {
    return axios.get(`/api/playlists/follows/${id}`)
};