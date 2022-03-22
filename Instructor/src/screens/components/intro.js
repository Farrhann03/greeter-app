import { Component } from "react";

class Intro extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>Welcome, {this.props.firstName}!</div>
        )
    }
}

export default Intro;