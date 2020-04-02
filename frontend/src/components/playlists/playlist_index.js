import React from 'react';
import { Route } from 'react-router-dom';
import PlaylistShowContainer from './playlist_show_container';
import Playlist from '../playlists/playlist';
// import Reactions from '../reactions/reactions';
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

    playlistItemCreator(playlist) {
        return(
            <li>
                <Playlist key={playlist.id} playlist={playlist} />
                <div className="playlist-spacer"></div>
            </li>
        );
    }

    render() {
        if (this.props.playlists.length > 0) {
            const { playlists } = this.props
        }
    
        return (
            <section className="playlist-index-container">
                {this.props.playlists.length > 0 ? 
                    <Route path="/playlist/:playlistId" 
                        component={PlaylistShowContainer} /> : null
                }
                <ul className="playlist-index">
                    {this.props.playlists.length > 0 ? 
                        (this.props.playlists.map(playlist =>
                            this.playlistItemCreator(playlist)
                        )) : null}
                </ul>
            </section>
        );
    }
};

export default PlaylistIndex;

