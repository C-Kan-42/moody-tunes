import React from 'react';
// import {Route} from 'react-router-dom';
// import axios from 'axios';
import Track from '../track/track';
// import Reactions from '../reactions/reactions';
import './playlist-show.scss';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            title: "",
            reactions: {
                happy: 0,
                sad: 0
            }
        }

        this.reactOnPlaylist = this.reactOnPlaylist.bind(this);
        this.reactOnPlaylistSad = this.reactOnPlaylistSad.bind(this);
        this.reactOnPlaylistChill = this.reactOnPlaylistChill.bind(this);
        this.reactOnPlaylistAngry = this.reactOnPlaylistAngry.bind(this);
        this.followPlaylist = this.followPlaylist.bind(this);
    };

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        // this.props.fetchReactions();
    }

    reactOnPlaylist(e) {
        e.preventDefault();
        var playlistId = this.props.playlist._id;
        this.props.playlist.reactions ? document.querySelector("#react-counts-happy").textContent++ : console.log(null);
        const reactionData = {id: playlistId, reaction: "happy"}
        // axios.post('/playlists/' + playlistId + '/react', {action: action});
        this.props.sendReaction(reactionData);
    }

    reactOnPlaylistSad(e) {
        e.preventDefault();
        var playlistId = this.props.playlist._id;
        const reactionData = {id: playlistId, reaction: "sad"}
        this.props.playlist.reactions ? document.querySelector("#react-counts-sad").textContent++ : console.log(null);
        this.props.sendReaction(reactionData);
    }

    reactOnPlaylistChill(e) {
        e.preventDefault();
        var playlistId = this.props.playlist._id;
        const reactionData = {id: playlistId, reaction: "chill"}
        this.props.playlist.reactions ? document.querySelector("#react-counts-chill").textContent++ : console.log(null);
        this.props.sendReaction(reactionData);
    }

    reactOnPlaylistAngry(e) {
        e.preventDefault();
        var playlistId = this.props.playlist._id;
        const reactionData = {id: playlistId, reaction: "angry"}
        this.props.playlist.reactions ? document.querySelector("#react-counts-angry").textContent++ : console.log(null);
        this.props.sendReaction(reactionData);
    }
    
    followPlaylist(e) {
        // console.log('follow button clicked')
        e.preventDefault();
        let userId = this.props.user ? this.props.user.id : null;
        let playlistId = this.props.playlist._id;
        const followData = {playlistId: playlistId, userId: userId};
        let followButtonText = "Unfollow";
        this.props.sendFollow(followData);

        //how to check if a user has followed this playlist?
        //if they follow it, render +unfollow and this.props.removeFollow(playlistId)
        //if they don't, execute above
        
    }

    render() {
        const {playlist} = this.props;
        var source = `https://open.spotify.com/embed/playlist/${playlist.spotifyId}`;
        let followButtonText = "+ Follow"
        if (this.props.playlist === {}) {
            return null;
        } else {
            // console.log(playlist.reactions)
            return(
                <section className="playlist-show-detail">
                    <div className="playlist-button-outer">
                        <div className="playlist-button-container">
                            <button className="playlist-detail-button" onClick={this.followPlaylist}>
                                {followButtonText}
                            </button>
                        </div>
                    </div>
                    <div className="playlist-details">
                        <h2 className="playlist-title">
                            {playlist.title}
                        </h2>
                        {/* <ul className="song-list">
                            {this.props.playlist.songs ? playlist.songs.map(song => 
                            <li>
                                <Track key={song._id} track={song}/> 
                            </li>
                            ) : null}
                        </ul>  */}

                        <div className="embedded-spotify-playlist">
                            <iframe src={source} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <div className="reaction-buttons">
                            <div>
                                <button className="reaction-box" onClick={this.reactOnPlaylist}>
                                    😊
                                </button>
                                {this.props.playlist.reactions ? <span className="react-counts" id="react-counts-happy">{playlist.reactions.happy}</span> : null}
                            </div>
                            <div>
                                <button className="reaction-box" onClick={this.reactOnPlaylistChill}>
                                    😎
                                </button>
                                {this.props.playlist.reactions ? <span className="react-counts" id="react-counts-chill">{playlist.reactions.chill}</span> : null}
                            </div>
                            <div>
                                <button className="reaction-box" onClick={this.reactOnPlaylistSad}>
                                    😢
                                </button>
                                {this.props.playlist.reactions ? <span className="react-counts" id="react-counts-sad">{playlist.reactions.sad}</span> : null}
                            </div>
                            <div>
                                <button className="reaction-box" onClick={this.reactOnPlaylistAngry}>
                                    🤬
                                </button>
                                {this.props.playlist.reactions ? <span className="react-counts" id="react-counts-angry">{playlist.reactions.angry}</span> : null}
                            </div>

                        </div>
                    </div>
                    {/* < Reactions /> */}
                </section>
            );
        }    
    };
};

export default PlaylistShow;
 