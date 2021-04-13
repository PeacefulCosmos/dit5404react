import React, { Component } from "react";

// class Counter extends Component {
//   render(props) {
//     console.log(props);
//     return (
//       <div>
//         <span>{this.printHelloWorld(props)}</span>
//       </div>
//     );
//   }

//   printHelloWorld(props) {
//     console.log(props);
//     return <h3>Hello {props}</h3>;
//   }
// }

const Counter = (props) => <h1>Hello {props.name}</h1>;

export default Counter;
