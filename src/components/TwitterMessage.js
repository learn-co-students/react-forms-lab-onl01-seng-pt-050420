import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: []
    };
  }

  handleChange = e => {
    this.setState({
      message : e.target.value 
    })
  }

  remainingCharacters = () => 
    {return this.props.maxChars - this.state.message.length}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange= {this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
        <p>Remaining Characters: {this.remainingCharacters()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
