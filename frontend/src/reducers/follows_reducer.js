import {
    RECEIVE_USER_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../actions/follow_actions';

const FollowsReducer = (state = { all: {}, user: [], follow: {}}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_USER_FOLLOWS:
            newState.user = action.follows.data;
            return newState;
        case REMOVE_FOLLOW:
            delete newState.all[action.followId];
            return newState;
        case RECEIVE_FOLLOW:
            newState.follow = action.follow;
            return newState;
        default:
            return state;
    }
};

export default FollowsReducer;