import React from "react";

//component
class TwitterMessage extends React.Component {
  //constructor
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  //eventhandler
  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  //where you render to DOM and use the jsx elements
  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
