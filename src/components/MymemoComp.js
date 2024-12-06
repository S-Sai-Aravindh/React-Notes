import React from "react";

const MymemoComp =(props)=> {
    return(
        <div>
            <hr></hr>
            My Memo Comp
            <h1>{props.empName} / {props.sal}</h1>
            {/* <h1 onMouseOver={props.manageState}>Change val</h1> */}
        </div>
    );
}

export default React.memo(MymemoComp) ;