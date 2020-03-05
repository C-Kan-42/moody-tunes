import { connect } from 'react-redux';
import { fetchUserFollows, 
  sendFollow, 
  deleteFollow 
} from '../../actions/follow_actions';

import Follow from './follows';

const mapStateToProps = state => {
  return {
    follows: Object.values(state.follows.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserFollows: (id) => dispatch(fetchUserFollows(id)),
    sendFollow: (followData) => dispatch(sendFollow(followData)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);