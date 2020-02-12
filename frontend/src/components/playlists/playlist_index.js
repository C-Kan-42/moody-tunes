import React from 'react';
// import ReactionsContainer from '../reactions/reactions_container';
import Playlist from '../playlists/playlist';
import Reactions from '../reactions/reactions';


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
            <ul>
                {this.props.playlists.length > 0 ? 
                    (this.props.playlists.map(playlist =>
                        <li>
                            <Playlist key={playlist.id} playlist={playlist} />
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