import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
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

  // handleDemo(e) {
  //   e.preventDefault();
  //   const demoUser = { username: 'demo_user', email: '', password: 'demo123' };
    
    
  // }

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

    if (this.props.formType === "sign up") {
      username = "create a username";
      password = "create a password";
      email = "email";
      emailHTML = (
        < label >
          {/* { email } */}
          < input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="your email address"
          />
        </label >
      );
      demoButton = null;


    }
    else {
      username = "your username";
      password = "your password";
      demoButton = (
        <button onClick={this.handleDemo}>demo user</button>
      );
    }

    return (
      <div className="login-form-container">
        {/* <button className="demo-login"onClick={() => this.props.login({ username: "jmoney", password: "password" })}>Demo Login</button> */}
        <form className="login-form" onSubmit={this.handleSubmit}>

          <label>
            {/* {username} */}
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder={username}
            />
          </label>
          <br />
          {emailHTML}
          <br />
          <label>
            {/* {password} */}
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder={password}
            />
          </label>

          {this.renderErrors()}
          <br />
          <input className="submit" type="submit" value={this.props.formType} />
          <br />
          {demoButton}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);