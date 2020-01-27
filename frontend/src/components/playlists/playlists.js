import React from 'react';
import ReactionsContainer from '../reactions/reactions_container';
import Reactions from '../reactions/reactions';

class Playlists extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.props.Playlists;
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    handleClick(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                {this.state.title}

                {/* <button>Play</button> */}

                <Reactions />
            </div>
        );
    }
};

export default Playlists;