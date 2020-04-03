import React from "react";
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import jwt_decode from "jwt-decode";


import NavBarContainer from "../nav/navbar_container";
import Modal from "../modal/modal";
import MainPage from "../main/main_page";

import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import PlaylistsContainer from '../playlists/playlists_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import ProfileContainer from '../profile/profile_container';
import FollowContainer from '../follows/follows_container';
import InvalidRoute from '../invalid_route/invalid_route';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            user: {},
            // playlists: [],
            // follows: []
        }
    }


    render() {
        return (
            <div className="app">
                <Modal />
                <NavBarContainer user={this.state.user}/>

                <Switch>
                    <AuthRoute exact path="/" component={MainPage} />
                    <ProtectedRoute exact path="/playlists" component={PlaylistsContainer} />
                    <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer} currentUser={this.state.user} />
                    <ProtectedRoute path="/profile/:userId" component={ProfileContainer} currentUser={this.state.user} />
                    <Route component={InvalidRoute} />
                </Switch>

            </div>
        )
    }
} 

export default App;
