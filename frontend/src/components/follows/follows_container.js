import { connect } from 'react-redux';
import { fetchUserFollows, 
  sendFollow, 
  deleteFollow 
} from '../../actions/follow_actions';
import { fetchPlaylist } from '../../actions/playlist_actions'

import Follow from './follow'

const mapStateToProps = (state) => {
  return {
    // follows: Object.values(state.follows.all),
    playlists: state.entities.playlists.all,
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFollows: (id) => dispatch(fetchUserFollows(id)),
    sendFollow: (followData) => dispatch(sendFollow(followData)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);