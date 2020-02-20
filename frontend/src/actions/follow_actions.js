import {
    getFollows,
    getUserFollows
} from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_USER_FOLLOWS = 'RECEIVE_USER_FOLLOWS';

export const receiveFollows = follows => ({
    type: RECEIVE_FOLLOWS,
    follows
});

export const receiveUserFollows = follows => ({
    type: RECEIVE_USER_FOLLOWS,
    follows
});

export const fetchFollows = () => (
    getFollows()
        .then(follows => dispatch(receiveFollows(follows)))
        .catch(err => console.log(err))
);

export const fetchUserFollows = id => dispatch => (
  getUserFollows(id)
    .then(follows => dispatch(receiveUserFollows(follows)))
    .catch(err => console.log(err))
);