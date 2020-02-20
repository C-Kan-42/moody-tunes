import { RECEIVE_REACTIONS } from '../actions/reaction_actions';

const ReactionReducer = ( state = { all: [] }, action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);

    switch (action.type) {
        case RECEIVE_REACTIONS:
            newState.all = action.reactions.data;
            return newState;
        default:
            return state;
    }
};

export default ReactionReducer;