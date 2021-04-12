import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "", 
      password: ""
    }; 
    //this.handleLogin = this.handleLogin.bind(this)
  } 

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }  


  handleSubmit = event => {
    event.preventDefault(); 
    const username = this.state.username 
    const password = this.state.password 
    if(username !== "" && password !== "") {
      this.props.handleLogin({username, password})
      this.setState({
        username: "", 
        password: ""
      })
    } 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.value}
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.value} 
            onChange={this.handleInputChange}/>
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
