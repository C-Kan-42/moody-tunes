import React from "react";
import { withRouter } from "react-router-dom";
import './session-form.scss';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
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
    this.props.processForm(user).then(() => {
      if (Object.keys(this.props.errors).length == 0) {
        this.props.closeModal();
      }

      //we want to trigger a setState in navbar from session form, trigger re-render in component 
      //session_form = child, when we click login or signup, we want to call function in navbar
    });

  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { username: 'demoUser', email: 'demo@email.com', password: 'password' };
    this.props.processForm(demoUser)
      .then(this.props.closeModal);
  }

  renderErrors() {
    // console.log(this.props.errors)
    if (Object.keys(this.props.errors).length > 0) {
      return (
        <ul>
          {Object.keys(this.props.errors).map((errorKey, i) => {
            return (
              <li className="errors" key={i}>
                {this.props.errors[errorKey]}
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
          <div className="form-label">
            Email
          </div> 
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
      const demoLabel = "Demo User";
      demoButton = (
        <button onClick={this.handleDemo} className="demo-button">
          <div className="button-label"> 
            Demo User
          </div> 
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

            {this.renderErrors()}

            <label>
              <div className="form-label">
                Username
              </div> 
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
              <div className="form-label">
                Password
              </div> 
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                // placeholder={password}
                className="form-input"
              />
            </label>

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