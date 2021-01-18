import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
               name="message" 
               id="message" 
               value={this.state.value}
               onChange={e => this.handleChange(e)} />
        <p>
          {this.props.maxChars - this.state.value.length} left before max characters allowed
        </p>
      </div>
    );
  }
}

export default TwitterMessage;