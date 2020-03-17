import React from 'react';
// import { withRouter  } from 'react-router-dom';

class Follow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            follows: []
        }
    };

    componentDidMount() {
        // console.log(this.props.fetchUserFollows(this.props.user._id))
        this.props.fetchUserFollows(this.props.user.id);
    }

    render() {
        // console.log(this.props.fetchUserFollows);
        // console.log(this.props.user)
        return (
            <div>
                All followed Playlist here
                {console.log(this.props.follows)}
            </div>
        )
    }
};

export default Follow;