import { Component } from "react";

class CondionalRenComp extends Component{
    
    constructor(){
        super();
        this.state={
            isCond:true
        }
    }
    
    render(){
        // 1.Use of if Cond 
        let msg = "";
        if(this.state.isCond){
            // return <h1>Admin login</h1>
            msg = "Admin";
        }
        else{
            // return <h1>User login</h1>
            msg = "User";
        }
        // 2. use of element as variable
        // return <h2>{msg}</h2>
        
        
        // 3. use of ternary operator 
        // return (this.state.isCond) ? <h2>Admins</h2> : <h2>Users</h2>

        // 4. use of short circuit
        return this.state .isCond && <h2>Admin3</h2>

    }
}


export default CondionalRenComp;