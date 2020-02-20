import React from 'react';
import {Route} from 'react-router-dom';

import Track from '../track/track';
import Reactions from '../reactions/reactions';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPlaylist: {}
        }
    };

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchReactions();
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.playlistId !== this.props.match.params.playlistId) {
    //     this.props.fetchPlaylist(this.props.match.params.playlistId);
    //     }
    // }

    render() {
        const {playlist} = this.props;
        // console.log(this.props.playlist);
        if (this.props.playlist === {}) {
            return null;
        } else {
            console.log(playlist.reactions)
            return(
                <section className="playlist-show-detail">
                    <h2 className="playlist-title">
                        {playlist.title}
                    </h2>
                    <ul className="song-list">
                        {this.props.playlist.songs ? playlist.songs.map(song => 
                        <li>
                            <Track key={song.id} track={song}/> 
                        </li>
                        ) : null}
                    </ul> 
                    <div>
                        {/* {playlist.reactions ? playlist.reactions.map(reaction => Object.entries(reaction).forEach(([key,value]) => console.log(`ObjectId(${(key)})`))) : null} */}
                        {/* // Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)) */}
                    </div>
                    <div>
                        {this.props.reactions.map(reaction => console.log(reaction))}
                    </div>
                    {/* < Reactions /> */}
                </section>
            );
        }    
    };
};

export default PlaylistShow;
 