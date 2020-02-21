import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/");
    };

    sessionLinks() {
        if(this.props.loggedIn) {
            return (
              <nav className="header-group">
                <h2 className="header-name">
                  {this.props.currentUser
                    ? this.props.currentUser.username
                    : null}
                </h2>
                &nbsp;&nbsp;
                <Link to={`/profile`}>
                    <button className="header-button">
                        profile
                    </button>
                </Link>
                &nbsp;&nbsp;
                <button className="header-button" onClick={this.logoutUser}>
                  log out
                </button>
              </nav>
            );
        } else {
            return (
                <nav className="login-signup">
                    <button className="header-button" onClick={() => this.props.openModal('login')}>log in
                    </button>
                        &nbsp;&nbsp;
                    <button className="header-button" onClick={() => this.props.openModal('signup')}>sign up
                    </button>
                </nav>
            )
            
        }
    };

    render() {
        return (
            <nav className="navbar">
                <Link to ={`/playlists`}>
                    <h1 className="moody-tunes">MOODY TUNES</h1>
                </Link>
                {this.sessionLinks()}
            </nav>
        );
    };

    
};

export default NavBar;