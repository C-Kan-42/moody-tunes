import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const initialState = {
    isAuthenticated: false,
    currentUser: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
        return {
            isAuthenticated: false,
            currentUser: null
        };
        default:
        return state;
    }
};
