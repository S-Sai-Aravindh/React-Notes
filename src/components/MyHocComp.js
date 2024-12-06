import React, { Component } from "react"; 
 
const MyHocComp = (WrapperComp,val) => {
    
    class Hoc extends Component{
        constructor(){
            super();
            this.state={
                count : 0
            }
        }
    
        changeCount =()=> {
            this.setState((prevState)=>({count : prevState.count+val}));
        }

        render(){
            return <WrapperComp count={this.state.count} incrementCounter={this.changeCount}></WrapperComp>
        }
    }
    
    return Hoc;
}

export default MyHocComp;