import { Component } from "react";

class MyStateComp extends Component{
    
    constructor(){
        super();
        this.state={
            empname : "Sai",
            sal : 50000
        }
    }

    changeStateData = () =>{
        // this.setState({empname : "Sai Aravindh",sal : this.state.sal + 5000});
        this.setState((prevState)=>({empname : "Sai Aravindh",sal : prevState.sal + 5000}));
    }
    
    render(){
        return(
            <div>
                <h1>This is my State Component {this.state.empname} {this.state.sal}</h1>
                <button type="button" onClick={()=>this.changeStateData()} className="btn btn-primary">Change State</button>
            </div>
        );
    }
}

export default MyStateComp;