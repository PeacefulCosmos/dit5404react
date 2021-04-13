import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    name: "Roy",
  };
  render() {
    return <Counter name="Roy" />;
  }
}

export default Counters;
