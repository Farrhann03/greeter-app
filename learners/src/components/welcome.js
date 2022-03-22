import { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>Welcome {this.props.fName}!</div>;
  }
}

export default Welcome;
