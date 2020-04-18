import React from 'react';
// import {Route} from 'react-router-dom';
// import axios from 'axios';
import Track from '../track/track';
import './playlist-show.scss';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            title: "",
            follows: [],
            user: {}
        }

        this.reactOnPlaylist = this.reactOnPlaylist.bind(this);
        this.reactOnPlaylistSad = this.reactOnPlaylistSad.bind(this);
        this.reactOnPlaylistChill = this.reactOnPlaylistChill.bind(this);
        this.reactOnPlaylistAngry = this.reactOnPlaylistAngry.bind(this);
        this.followPlaylist = this.followPlaylist.bind(this);
        this.unfollowPlaylist = this.unfollowPlaylist.bind(this);
    };

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchUserFollows(this.props.user.id)
        //     .then((res) => {
        //     // console.log(res.follows.data);
        //     this.setState({ follows: res.follows.data });
        // });
    }

    //refactor so that users can only react once with each emotion
    reactOnPlaylist(e) {
        e.preventDefault();
        var playlistId = this.props.playlist._id;
        this.props.playlist.reactions ? document.querySelector("#react-counts-happy").textContent++ : console.log(null);
        const reactionData = {id: playlistId, reaction: "happy"}
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
        e.preventDefault();
        let userId = this.props.user ? this.props.user.id : null;
        let playlistId = this.props.playlist._id;
        const followData = {playlistId: playlistId, userId: userId };        
        var followButtonText = "Unfollow"
        document.querySelector('#button').innerHTML = "Unfollow"
        this.props.sendFollow(followData)
        this.setState({["follows"]: this.state.follows})
    }

    unfollowPlaylist(e) {
        e.preventDefault();
        let userId = this.props.user ? this.props.user.id : null;
        let playlistId = this.props.playlist._id;
        for (var i = 0; i < this.props.follows.length; i++){
            if (this.props.follows[i].playlistId === playlistId && this.props.follows[i].userId === userId){
                var currFollowId = this.props.follows[i]._id
            }
        }
        const followData = { playlistId: playlistId, userId: userId, followId: currFollowId };
        var followButtonText = "+ Follow";
        document.querySelector('#button').innerHTML = "+ Follow"
        this.props.deleteFollow(followData)
        this.setState({["follows"]: this.state.follows.filter(({ followId }) => followId !== currFollowId)})
                    
    }

    render() {
        const {playlist} = this.props;
        var followButtonText = "+ Follow";
        if (this.props.follows.length > 0) {
            for (var i = 0; i < this.props.follows.length; i++) {
                var follow = this.props.follows[i];
                if (follow.playlistId === this.props.playlist._id) {
                    followButtonText = "Unfollow";
                }
            } 
        }
        var source = `https://open.spotify.com/embed/playlist/${playlist.spotifyId}`;
        if (this.props.playlist === {}) {
            return null;
        } else {
            return(
                <section className="playlist-show-detail">
                    <div className="playlist-button-outer">
                        <div className="playlist-button-container">
                            { followButtonText === "+ Follow" ? 
                            (<button className="playlist-detail-button" id="button" onClick={this.followPlaylist}>
                                {followButtonText}
                            </button>) :
                            (<button className="playlist-detail-button" id="button" onClick={this.unfollowPlaylist}>
                                {followButtonText}
                            </button>) }
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
                </section>
            );
        }    
    };
};

export default PlaylistShow;
 