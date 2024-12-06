import { Component } from "react";
import MyHocComp from "../components/MyHocComp";

class HoverCounterComp extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         count : 0
    //     }
    // }

    // changeCount() {
    //     this.setState((prevState)=>({count : prevState.count+1}));
    // }

    render(){
        return(
            <div>
                <hr></hr>
                <h1>Increment Counter Hover</h1>
                <h1>Count : {this.props.count}</h1>
                <button type="button" onMouseOver={this.props.incrementCounter}>Change</button>
            </div>

        );
    }
}

export default MyHocComp(HoverCounterComp,5);