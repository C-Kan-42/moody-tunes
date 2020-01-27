import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from './errors_reducer';
import ui from './ui_reducer';
import playlists from './playlists_reducer';
import reactions from './reactions_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    ui,
    playlists,
    reactions,
});

export default RootReducer;
