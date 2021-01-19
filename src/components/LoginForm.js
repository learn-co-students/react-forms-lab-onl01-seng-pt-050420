import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    if (this.state.username != "" && this.state.password != ""){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleLogin(e)}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            onChange={e => this.handleChange(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            onChange={e => this.handleChange(e)}
            />
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
