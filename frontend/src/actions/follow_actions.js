import {
    getUserFollows,
    postFollow,
    destroyFollow
} from '../util/follow_api_util';

// export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_USER_FOLLOWS = 'RECEIVE_USER_FOLLOWS';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

export const receiveUserFollows = follows => ({
    type: RECEIVE_USER_FOLLOWS,
    follows
});

export const removeFollow = follow => ({
    type: REMOVE_FOLLOW,
    follow
});

export const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

export const fetchUserFollows = id => dispatch => (
    getUserFollows(id)
        .then(follows => dispatch(receiveUserFollows(follows)))
        .catch(err => console.log(err))
);

export const sendFollow = followData => dispatch => (
    postFollow(followData)
        .then(res => dispatch(receiveFollow(res.data)))
        .catch(err => console.log(err))
);

export const deleteFollow = followData => dispatch => (
    destroyFollow(followData)
        .then(res => {
            dispatch(removeFollow(res.data))})
        .catch(err => console.log(err))
);
