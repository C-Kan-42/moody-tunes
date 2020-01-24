import React from 'react';
import './navbar.scss';

const NavBar = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="header-button" onClick={() => openModal('login')}>log in
            </button>
                &nbsp;&nbsp;
            <button className="header-button" onClick={() => openModal('signup')}>sign up
            </button>
        </nav>
    );

    const personalGreeting = () => (
        <nav className="header-group">
            <h2>{currentUser.username}</h2>
            &nbsp;&nbsp;
            <button className="header-button" onClick={logout}>log out</button>
        </nav>
    );

    console.log(currentUser);
    // debugger;
    return (
        <nav className="navbar">
            <h1 className="moody-tunes">MOODY TUNES</h1>
            {currentUser ? personalGreeting() : sessionLinks()}
        </nav>
    )
};

// the Greeting component is purely presentational--it doesn't have to maintain any local state.
// therefore, we can just export it as a regular variable; it doesn't need to be a React component.

export default NavBar;