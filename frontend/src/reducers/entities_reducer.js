import { combineReducers } from 'redux';
import playlists from './playlists_reducer';

const entitiesReducer = combineReducers({
  playlists
});

export default entitiesReducer;