import { connect } from "react-redux";
import Reactions from './reactions';
import {fetchReactions} from '../../actions/reaction_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    reactions: state.entities.reactions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReactions: () => dispatch(fetchReactions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reactions);
