import { Component } from "react";
import MyHocComp from "../components/MyHocComp";

class  ClickCounterComp extends Component{
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
                <h1>Increment Counter</h1>
                <h1>Count : {this.props.count}</h1>
                <button type="button" onClick={()=> this.props.incrementCounter()}>Change</button>
            </div>

        );
    }
}

export default MyHocComp(ClickCounterComp,3) ;