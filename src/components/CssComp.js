import React from "react";
import './external.css';
import mymodule from './mycss.module.css';

const CssComp = () => {
    let circle={
        width : "100px",
        height : "100px",
        borderRadius:"50%",
        border:"2px solid red"
    }
    return (
        <div>
            <p style={circle}>Hello</p>
            <p className="txtprimary">Jinbei</p>
            <p className={mymodule.special}>Luffy</p>
        </div>
    );
}

export default CssComp;