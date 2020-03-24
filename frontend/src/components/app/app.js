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

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            user: {}
        }
    }


    render() {
        return (
            <div className="app">
                <Modal />
                <NavBarContainer user={this.state.user}/>

                <Switch>
                    <AuthRoute exact path="/" component={MainPage} />
                    {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
                    {/* <AuthRoute exact path="/register" component={SignupFormContainer} /> */}
                    <ProtectedRoute exact path="/playlists" component={PlaylistsContainer} />
                    <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer} />
                    {/* <ProtectedRoute path="/profile" components={{profile: {ProfileContainer}, follows: {FollowContainer}}} />  */}
                    {/* <ProtectedRoute path="/profile" component={FollowContainer}/> */}
                    <ProtectedRoute path="/profile/:userId" component={ProfileContainer} user={this.state.user}/>
                </Switch>

            </div>
        )
    }
} 

export default App;
