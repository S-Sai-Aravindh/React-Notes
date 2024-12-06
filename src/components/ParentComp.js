import React , {Component} from "react";
import ChildComp from "./ChildComp";
import MypureComp from "./MypureComp";
import MymemoComp from "./MymemoComp";

class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state= {
            empName: "Sai",
            empSal: 50000
        }
    }

    changeState =()=>{
        this.setState((prevState)=>({empName : "Sai Aravindh",empSal : prevState.empSal + 5000}));
    }

    render(){
        const {empName,empSal} = this.state;  //destructuring of state
        const {gender , contact} = this.props; //destructuring of props
        return(
            <div>
                <h1>Name: {this.state.empName} / Employee Salary: {this.state.empSal} </h1> 
                <h1> Gender : {this.props.gender} / Contact : {this.props.contact}</h1>
                <h1>Name: {empName} / Employee Salary: {empSal} </h1> 
                <h1> Gender : {gender} / Contact : {contact}</h1>
                <button type="button" className="btn btn-primary" onClick={()=>this.changeState()}>Increment Salary</button>
                <ChildComp name={empName} sal={empSal} manageState={()=>this.changeState()}/>
                <hr></hr>
                <MypureComp empName = {empName}/>
                <MymemoComp  empName = {empName}/>
            </div>
        );
    }
}

export default ParentComp;