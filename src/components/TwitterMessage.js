import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingCharacters: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      remainingCharacters: this.props.maxChars - event.target.value.length,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)}
            value={this.state.message} />
        <p>Remaining characters: {this.state.remainingCharacters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
