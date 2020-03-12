import React from 'react';
// import { withRouter  } from 'react-router-dom';

class Follow extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = {
        //     playlists: []
        // }
    };

    componentDidMount() {
        this.props.fetchUserFollows(this.props.match.params.playlistId);
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                All followed Playlist here
            </div>
        )
    }
};

export default Follow;