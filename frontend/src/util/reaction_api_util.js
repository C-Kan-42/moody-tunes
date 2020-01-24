import axios from 'axios';

export const getReactions = () => {
    return axios.get('/api/reactions')
};

// export const getAllPlaylistReactions = (id) => {
//     return axios.get(`/api/`)
// }