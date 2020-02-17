import { getPlaylist, getPlaylists, getFollowedPlaylists } from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIEVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
// export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIEVE_FOLLOWED_PLAYLISTS';

export const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

export const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

// export const receiveFollowedPlaylists = playlists => ({
//     type: RECEIVE_FOLLOWED_PLAYLISTS,
//     playlists
// });

export const fetchPlaylists = () => dispatch => (
    getPlaylists()
        .then(playlists => dispatch(receivePlaylists(playlists)))
        .catch(err => console.log(err))
);

export const fetchPlaylist = playlist_id => dispatch => (
    getPlaylist(playlist_id)
        .then(playlist => dispatch(receivePlaylist(playlist)))
        .catch(err => console.log(err))
);

// export const fetchFollowedPlaylists = () => dispatch =>
//     getFollowedPlaylists(id)
//         .then(playists => dispatch(receiveFollowedPlaylists(plalists)))
//         .catch(err => console.log(err));