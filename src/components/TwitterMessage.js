import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }
  handleMessageChange= event =>{
    console.log(this.props.maxChars - event.target.value.length);

    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // calculateChars = maxChars =>{
 
  //     this.props.maxChars - this.state.message.length
  
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={event => this.handleMessageChange(event)}
        value={this.state.message} />
        <p>Remaining Characters: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
