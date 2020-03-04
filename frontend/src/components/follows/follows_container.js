import { connect } from 'react-redux';
import { fetchFollows, fetchUserFollows } from '../../actions/follow_actions';

import Follow from './follows';

const mapStateToProps = state => {
  return {
    follows: Object.values(state.follows.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFollows: () => dispatch(fetchFollows()),
    fetchUserFollows: (id) => dispatch(fetchUserFollows(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);