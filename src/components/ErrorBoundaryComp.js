import { Component } from "react";

class ErrorBoundaryComp extends Component{
    constructor(){
        super();
        this.state={
            isCont : false
        }
    }

    static getDerivedStateFromError(){
        return {
            isCont : true
        }
    }

    componentDidCatch(error){
        console.log(error);
    }

    render(){
        if(this.state.isCont){
            return <div>Not a User</div>
        }
        return this.props.children;
    }

}

export default ErrorBoundaryComp;