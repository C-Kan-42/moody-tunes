import {
    RECEIVE_FOLLOWS,
    RECEIVE_USER_FOLLOWS
} from '../actions/follow_actions';

const FollowsReducer = (state = { all: {}, user: {}}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FOLLOWS:
            newState.all = action.follows.data;
            return newState;

        case RECEIVE_USER_FOLLOWS:
            newState.user = action.follows.data;
            return newState;
            
        default:
            return state;
    }
};

export default FollowsReducer;