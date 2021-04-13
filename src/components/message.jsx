import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "This is an apple",
    };
  }

  render() {
    return <div>{this.initMessage()}</div>;
  }

  initMessage = () => {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.click}>subscribe</button>
      </div>
    );
  };

  click = () => {
    this.setState((prevState) => ({
      message: prevState.message + " and it has been subscribed",
    }));
  };
}

export default Message;
