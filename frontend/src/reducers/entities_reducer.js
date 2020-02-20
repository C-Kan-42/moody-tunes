import { combineReducers } from 'redux';
import playlists from './playlists_reducer';
import reactions from './reactions_reducer';

const entitiesReducer = combineReducers({
  playlists,
  reactions
});

export default entitiesReducer;