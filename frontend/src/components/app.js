import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";


import NavBarContainer from "./nav/navbar_container";
import Modal from "./modal/modal";
import MainPage from "./main/main_page";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());

//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

const App = () => (
   
    <div className="app">
        <Modal/>
        <NavBarContainer />
        <AuthRoute exact path ="/" component={MainPage}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/register" component={SignupFormContainer} />
        {/* <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            
        </Switch> */}
    </div>

   
);

export default App;
