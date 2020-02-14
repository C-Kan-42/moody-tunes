import React from 'react';
import {Route} from 'react-router-dom';

import Track from '../track/track';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        }
    }

    render() {
        const {playlist} = this.props;

        if (!playlist) return null;

        return(
            <section className="playlist-show-detail">
                <h2 className="playlist-title">
                    {playlist.title}
                </h2>
                <ul className="song-list">
                    {playlist.songs.map(song => 
                    <li>
                        <Track key={song.id} track={song}/> 
                    </li>
                    )}
                </ul>
            </section>
            
        )
    };
};

export default PlaylistShow;
 