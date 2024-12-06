import React from "react";
const UserComp = (props) => {

    if(props.name === "Brook"){
        throw Error("Not a user")
    }

    return(
        <div>
            <hr></hr>
            <h1>This is User Comp</h1>
            <h3>The username : {props.name} / Salary : {props.salary}</h3>
        </div>
    );
}

export default UserComp;