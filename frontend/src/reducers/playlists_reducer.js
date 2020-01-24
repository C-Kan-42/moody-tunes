import { RECEIVE_PLAYLISTS, 
    RECEIVE_FOLLOWED_PLAYLISTS 
} from '../actions/playlist_actions';

const PlaylistsReducer = (
    state = { all: {} , followed: {} }
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            newState.all = action.playlists.data; // DOUBLE CHECK THIS
            return newState;

        // case RECEIVE_FOLLOWED_PLAYLISTS:
        //     newState.followed = action.playlists.data;
        //     return newState;
                
        default:
            return state;
    }
};

export default PlaylistsReducer;