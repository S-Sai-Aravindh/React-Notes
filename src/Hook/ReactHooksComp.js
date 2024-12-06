import { Link, Outlet } from "react-router-dom";

const ReactHooksComp = () =>{
    return(
        <div>
            React Hooks Component
            <div>
                <Link to="useState" className="btn btn-warning">UseState</Link>{" "}
                <Link to="useEffect" className="btn btn-warning">UseEffect</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default ReactHooksComp;