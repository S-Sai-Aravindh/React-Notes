import { useState } from "react";

const UseStateHooksComp =()=>{
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Sai");

    const incrementCount = () =>{
        setCount(count+1);
    }

    return(
        <div>
            <h1>This useState </h1>
            <p>Counter : {count}</p>

            <button type="button" onClick={()=>incrementCount()} className="btn btn-primary">Change Count</button>{" "}
            <button type="button" onClick={()=>setCount(count+2)} className="btn btn-primary">Change Count</button>{" "}
            <hr></hr>
            <p>name : {name}</p>
            <button type="button" onClick={()=>setName("Aravindh")} className="btn btn-primary">Change Name</button>
        </div>
    );
}

export default UseStateHooksComp