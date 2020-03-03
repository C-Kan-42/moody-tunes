import { RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN, RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const initialState = {
    isAuthenticated: false,
    currentUser: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                currentUser: action.currentUser
            };
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                currentUser: null
            };
        
        default:
            return state;
    }
};
