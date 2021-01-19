import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  }

  render() {
    // component takes in a prop
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        {/*controlled component b/c we add attributes*/}
        <input type="text" value={this.state.message} onChange={this.handleChange} name="message" id="message" />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
