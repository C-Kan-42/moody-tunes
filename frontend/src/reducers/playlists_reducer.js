
import { RECEIVE_PLAYLISTS, 
    RECEIVE_PLAYLIST, 
    RECEIVE_FOLLOWED_PLAYLISTS, 
    RECEIVE_REACTION,
    RECEIVE_FOLLOW
} from '../actions/playlist_actions';


const PlaylistsReducer = (state = {all: [], currentPlaylist: {}, reaction: ""}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            newState.all = action.playlists.data; //array of all playlists stored under entities.playlists.all
            return newState;
        case RECEIVE_PLAYLIST:
            newState.currentPlaylist = action.playlist.data;
            return newState;
        // case RECEIVE_FOLLOWED_PLAYLISTS:
        //     newState.followed = action.playlists.data;
        //     return newState;
        case RECEIVE_REACTION:
            newState.reaction = action.reaction;
            return newState;
        case RECEIVE_FOLLOW:
            newState.follow = action.follow;
            return newState;
        default:
            return state;
    }
};

export default PlaylistsReducer;