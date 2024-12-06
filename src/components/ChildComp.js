const ChildComp =(props)=> {
    return(
        <div>
            <hr></hr>
            Child Comp  
            <h1>{props.name} / {props.sal}</h1>
            {/* <h1 onMouseOver={props.manageState}>Change val</h1> */}
        </div>
    );
}

export default ChildComp;