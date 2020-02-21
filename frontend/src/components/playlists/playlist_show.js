import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Track from '../track/track';
import Reactions from '../reactions/reactions';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPlaylist: {}
        }

        this.reactOnPlaylist = this.reactOnPlaylist.bind(this);
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

    

    reactOnPlaylist(event) {
        // var updatePlaylistStats = {
        //     react: function(playlistId)  {
        //         document.querySelector("react-counts").textContent++;
        //     }
        // };
        var playlistId = this.props.playlist._id;
        var action = event.target.textContent.trim();
        document.querySelector("#react-counts").textContent++;
        axios.post('/playlists/' + playlistId + '/react', {action: action});
    }

    render() {
        const {playlist} = this.props;
        console.log(playlist.reactions)
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
                            <Track key={song._id} track={song}/> 
                        </li>
                        ) : null}
                    </ul> 
                    <div className="reaction-buttons">
                        <button onClick={this.reactOnPlaylist} data-post-id={playlist._id}>
                            😊
                        </button>
                        <span id="react-counts">{this.props.playlist.reactions ? playlist.reactions.happy : null}</span>
                    </div>
                    {/* < Reactions /> */}
                </section>
            );
        }    
    };
};

export default PlaylistShow;
 