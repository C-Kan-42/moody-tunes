import React from 'react';
// import ReactionsContainer from '../reactions/reactions_container';
import Playlist from '../playlists/playlist';
import Reactions from '../reactions/reactions';
import './playlist-index.scss';

class PlaylistIndex extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            playlists: []
        };
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        if (this.props.playlists.length > 0) {
            const { playlists } = this.props
            console.log(playlists);
        }
        console.log(this.props.playlists)
        return (
            <ul className="playlist-index">
                {this.props.playlists.length > 0 ? 
                    (this.props.playlists.map(playlist =>
                        <li className="playlist-item">
                            <Playlist key={playlist.id} playlist={playlist} />
                            <div className="playlist-spacer"></div>
                        </li>
                    )) : null}
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