import { Component } from "react";

class VirtualDOM extends Component{

    constructor(){
        super();
        this.state={
            breakfast : [
                {id:101,names:"Zoro",price:'30'},
                {id:102,names:"Luffy",price:'40'},
                {id:103,names:"Sanji",price:'50'},
                {id:104,names:"Chopper",price:'60'},

            ],
            courses:["java","React","Angular","Python"]
        }
    }


    render(){
        const {breakfast,courses} = this.state;
        return(
            <div>
                <h2>Virtual DOM</h2>
                <ul>
                    {
                        breakfast.length >0 && breakfast.map((val,index)=>{
                            return <li key={val.id}>{val.names} - &#8377;{val.price}</li>
                        })
                    }
                </ul>
                <hr></hr>
                <label>Select Course:</label>
                <select>
                    {
                        courses.length >0 && courses.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                </select>
            </div>
        );
    }
}

export default VirtualDOM;