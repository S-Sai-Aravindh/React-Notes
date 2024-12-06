import React, { Component } from 'react'

class MyFavColorComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color : "Red"
      }
    }

    // static getDerivedStateFromProps(props){
    //     return {
    //         color : props.newColor
    //     }
    // }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"Pink"});
        },2000)
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML=`Before update my fav color: ${prevState.color}`;
    }

    changeColor = () =>{
        this.setState({color:"Blue"});
    }

    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML=`After update my fav color: ${this.state.color}`;

    }
    
    render() {
    return (
      <div>
            <h1>My Fav Color Comp</h1>    
            <p>Color is {this.state.color}</p>
            <div id='beforeupdate'></div>
            <div id='afterupdate'></div>
      </div>
    )
  }
}

export default MyFavColorComp;
