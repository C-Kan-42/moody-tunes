import React from 'react';
import './navbar.scss';
import { Route, Link } from 'react-router-dom';
import Profile from '../profile/profile';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.currentUser
        };

        this.logoutUser = this.logoutUser.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/");
    };

    sessionLinks() {
        // if (!this.props.currentUser) {
        //     return null
        // }
        if(this.props.loggedIn) {
            return (
              <nav className="header-group">
                <h2 className="header-name">
                  {this.props.currentUser
                    ? this.props.currentUser.username
                    : null}
                </h2>
                &nbsp;&nbsp;
                {console.log(this.props.currentUser)}
               
                {this.props.currentUser ? 
                <Link to={`/profile/${this.props.currentUser.id}`}>
                    <button className="header-button">
                        profile
                    </button>
                </Link> : null
                }
                
                {/* <Profile user={this.state.user}/>     */}
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
                <Link to={`/playlists`} style={ {textDecoration: 'none'} }>
                    <h1 className="moody-tunes">MOODY TUNES</h1>
                </Link>
                {this.sessionLinks()}
            </nav>
        );
    };

    
};

export default NavBar;