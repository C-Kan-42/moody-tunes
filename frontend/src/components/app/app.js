import React from "react";
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";


import NavBarContainer from "../nav/navbar_container";
import Modal from "../modal/modal";
import MainPage from "../main/main_page";

import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import PlaylistsContainer from '../playlists/playlists_container';

const App = () => (
   
    <div className="app">
        <Modal/>
        <NavBarContainer />

        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/register" component={SignupFormContainer} />
            <ProtectedRoute exact path="/playlists" component={PlaylistsContainer} />
        </Switch>

    </div>

   
);

export default App;
