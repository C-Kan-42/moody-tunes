import { combineReducers } from 'redux';
import playlists from './playlists_reducer';
import reactions from './reactions_reducer';
import users from './users_reducer';
import follows from './follows_reducer';

const entitiesReducer = combineReducers({
  playlists,
  reactions,
  users,
  follows
});

export default entitiesReducer;