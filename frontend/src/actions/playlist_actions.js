import { getPlaylists, getFollowedPlaylists } from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIEVE_PLAYLISTS';
export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIEVE_FOLLOWED_PLAYLISTS';

export const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

export const receiveFollowedPlaylists = playlists => ({
    type: RECEIVE_FOLLOWED_PLAYLISTS,
    playlists
});

export const fetchPlaylists = () => dispatch =>
    getPlaylists()
        .then(playlists => dispatch(receivePlaylists(playlists)))
        .catch(err => console.log(err));

// export const fetchFollowedPlaylists = () => dispatch =>
//     getFollowedPlaylists(id)
//         .then(playists => dispatch(receiveFollowedPlaylists(plalists)))
//         .catch(err => console.log(err));