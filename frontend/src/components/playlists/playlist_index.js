import React from 'react';
import ReactionsContainer from '../reactions/reactions_container';
import Playlist from '../playlists/playlist';
import Reactions from '../reactions/reactions';

class PlaylistIndex extends React.Component{
    constructor(props) {
        super(props);

        // this.state = this.props.Playlists;
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    handleClick(e) {
        e.preventDefault();

    }

    render() {
        const { playlists } = this.props
        return (
            <ul>
                {playlists.map((playlist) => <Playlist key={playlist.id} playlist={playlist}/>)}
            </ul>
            // <div>
            //     {this.state.title}

            //     {/* <button>Play</button> */}

            //     <Reactions />
            // </div>
        );
    }
};

export default PlaylistIndex;