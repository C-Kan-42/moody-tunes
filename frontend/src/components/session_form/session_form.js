import React from "react";
import { withRouter } from "react-router-dom";
import './session-form.scss';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { username: 'demoUser', email: 'demo@email.com', password: 'password' };
    this.props.processForm(demoUser)
      .then(this.props.closeModal);
  }

  renderErrors() {
    if (Array.from(this.props.errors).length > 0) {
      return (
        <ul>
          {(Array.from(this.props.errors)).map((error, i) => {
            return (
              <li className="errors" key={i}>
                {error}
              </li>
            )
          })
          }
        </ul>
      )
    }
    else {
      return null;
    }

  }

  render() {
    let username;
    let password;
    let email;
    let emailHTML;
    let demoButton;

    if (this.props.formType === "Sign Up") {
      username = "create a username";
      password = "create a password";
      email = "email";
      emailHTML = (
        < label>
          <header className="form-label">
            Email
          </header> 
          <br />
          < input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            // placeholder="Email"
            className="form-input"
          />
        </label >
      );
      demoButton = null;


    }
    else {
      username = "username";
      password = "password";
      demoButton = (
        <button onClick={this.handleDemo} className="demo-button">
          <span className="button-label"> 
            Demo User
          </span> 
        </button>
      );
    }

    return (
      <div className="login-form-box">
        <div className="login-form-container">
          {/* <button className="demo-login"onClick={() => this.props.login({ username: "jmoney", password: "password" })}>Demo Login</button> */}
          <form className="login-form" onSubmit={this.handleSubmit}>
            <header className="session-form-header">
              {this.props.formType}
            </header>
            <label>
              <header className="form-label">
                Username
              </header> 
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                // placeholder={username}
                className="form-input"
              />
            </label>
            <br />
            {emailHTML}
            <br />
            <label>
              <header className="form-label">
                Password
              </header> 
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                // placeholder={password}
                className="form-input"
              />
            </label>

            {this.renderErrors()}
            <br />

            <div className="button-row">
              <div className="left-button">
                  <input className="submit" type="submit" value={this.props.formType} />
              </div>
              <div className="right-button">
                {demoButton}
              </div>
            </div>
            
          </form>
        </div>
      </div>
      
    );
  }
}

export default withRouter(SessionForm);