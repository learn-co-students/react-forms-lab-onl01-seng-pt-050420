import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if (username !== "" && password !== "") {
      this.props.onSubmit({username, password});
      this.setState({
        username: "",
        password: ""
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" 
                   name="username" 
                   type="text" 
                   value={this.state.username}
                   onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
                   name="password" 
                   type="password" 
                   value={this.state.password}
                   onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
