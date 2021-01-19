import React from "react";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = e => {
    this.setState({
      tweet: e.target.value
    })
  }

  remainingChars = () => {
    return this.props.maxChars - this.state.tweet.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" 
        id="message" 
        onChange={e => this.handleChange(e)} 
        value={this.state.tweet}
        />
        Remaining characters: {this.remainingChars()}
      </div>
    );
  }
}