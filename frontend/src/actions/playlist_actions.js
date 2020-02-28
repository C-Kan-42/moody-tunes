
import { getPlaylist, 
    getPlaylists, 
    getFollowedPlaylists, 
    postReaction,
    postFollow 
} from '../util/playlist_api_util';
import { RECEIVE_REACTIONS } from './reaction_actions';


export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
// export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIEVE_FOLLOWED_PLAYLISTS';
export const RECEIVE_REACTION = 'RECEIVE_REACTION';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

export const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

export const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

export const receiveReaction = reaction => ({
    type: RECEIVE_REACTION,
    reaction
});

export const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
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

export const sendReaction = reactionData => dispatch => (
    postReaction(reactionData)
        .then(res => dispatch(receiveReaction(res.data)))
        .catch(err => console.log(err))
)

export const sendFollow = followData => dispatch => (
    postFollow(followData)
        .then(res => dispatch(receiveFollow(res.data)))
        .catch(err => console.log(err))
)

// export const fetchFollowedPlaylists = () => dispatch =>
//     getFollowedPlaylists(id)
//         .then(playists => dispatch(receiveFollowedPlaylists(plalists)))
//         .catch(err => console.log(err));