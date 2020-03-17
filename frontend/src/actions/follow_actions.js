import {
    getUserFollows,
    postFollow,
    destroyFollow
} from '../util/follow_api_util';

// export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_USER_FOLLOWS = 'RECEIVE_USER_FOLLOWS';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';


// export const receiveFollows = follows => ({
//     type: RECEIVE_FOLLOWS,
//     follows
// }); 

export const receiveUserFollows = follows => ({
    type: RECEIVE_USER_FOLLOWS,
    follows
});

export const removeFollow = followId => ({
    type: REMOVE_FOLLOW,
    followId
});

export const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

// export const fetchFollows = () => dispatch => (
//     getFollows()
//         .then(follows => dispatch(receiveFollows(follows)))
//         .catch(err => console.log(err))
// );

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

export const deleteFollow = followId => dispatch => (
    destroyFollow(followId)
        .then(followId => dispatch(removeFollow(followId)))
        .catch(err => console.log(err))
);
