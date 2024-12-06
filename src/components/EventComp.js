import { Component, Fragment } from "react";

class EventComp extends Component{
    
    greeting =()=>{
        window.alert("Hello Everyone");
    }
    welcome = (...std) =>{
        window.alert(`${std}}`);
    }
    render(){
        return (
            <Fragment>
                {/* <h1 onMouseOver={()=>this.greeting()}>This is event Component</h1> */}
                <button type="button" onClick={()=>this.greeting()}>Call Greeting</button>
                <button type="button" onClick={()=>this.welcome("Sai","Aravindh")}>Call Welcome</button>
            </Fragment>
        );
    }
}

export default EventComp;
