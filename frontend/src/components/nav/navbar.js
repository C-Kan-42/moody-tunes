import React from 'react';

const NavBar = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>log in
        </button>
                &nbsp;&nbsp;
        <button onClick={() => openModal('signup')}>sign up
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

    return (
        <nav className="greeting">
            <h1>MoodyTunes</h1>
            {currentUser ? personalGreeting() : sessionLinks()}
        </nav>
    )
};

// the Greeting component is purely presentational--it doesn't have to maintain any local state.
// therefore, we can just export it as a regular variable; it doesn't need to be a React component.

export default NavBar;