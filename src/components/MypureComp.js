import { Component, PureComponent } from "react";

class MypureComp extends PureComponent{
    render(){
        console.log("pure comp");
        return(
            <div>
                <h1>This is pure Comp</h1>
                <h1>This is pure Comp {this.props.empName}</h1>
            </div>
        );
    }
}

export default MypureComp;