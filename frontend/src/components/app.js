import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import Modal from "./modal/modal";

import MainPage from "./main/main_page";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import PlaylistsContainer from './playlists/playlists_container';

const App = () => (
    <div>
        <Modal/>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

            <ProtectedRoute exact path="/playlists" component={PlaylistsContainer} />
        </Switch>
    </div>
);

export default App;
