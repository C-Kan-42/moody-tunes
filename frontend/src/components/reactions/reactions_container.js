import { connect } from "react-redux";
import Reactions from './reactions';


const mapStateToProps = (state, ownProps) => {
  return {
    reactions: Object.values(state.entities.reactions)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReactions: () => dispatch(fetchReactions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reactions);
