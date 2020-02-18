import { getReactions } from '../util/reaction_api_util';

export const RECEIVE_REACTIONS = 'RECEIVE_REACTIONS';

export const receiveReactions = reactions => ({
    type: RECEIVE_REACTIONS,
    reactions
});

export const fetchReactions = () => dispatch => (
    getReactions()
        .then(reactions => dispatch(receiveReactions(reactions)))
        .catch(err => console.log(err))
);