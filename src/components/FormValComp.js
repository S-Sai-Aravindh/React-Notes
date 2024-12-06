import React, { useState } from 'react'

const FormValComp = () => {
    let mycourse = ['Java' , "HTML"];
    const[user,setUser] = useState({
        fname : "",
        lname : "",
        term : false,
        courses : ""        
    });

    const changeInput = (event)=>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const {type,name,value,checked} = event.target;
        setUser({...user,[name]:type==="checkbox"?checked:value});
    }


    const checkData = (event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("Name is required");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("Firstname must contain only character 3-20");
            return false;
        }
        if(!user.lname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("Lastname must contain only character 3-20");
            return false;
        }
        if(user.courses === ""){
            window.alert("Select your course");
            return false;
        }
        if(user.term===false){
            window.alert("Please accept terms and conditions");
            return false;
        }
        window.alert(JSON.stringify(user));
    }

    return (
    <div>
        <h2>This is Form validation</h2>
        <form onSubmit={checkData}>
            <div>
                <label>Enter your Firstname: </label>
                <input type='text' name='fname' onChange={changeInput} value={user.fname}/>
            </div>
            <div>
                <label>Enter your Lastname: </label>
                <input type='text' name='lname' onChange={changeInput} value={user.lname}/>
            </div>
            <div>
                <label>Select your course: </label>
                <select name='courses' onChange={changeInput}>
                <option value="">Select Course</option>
                {
                    mycourse.map((val,index)=>{
                        return <option value={val} key={index}>{val}</option>
                    })
                }
                </select>
            </div>
            <div>
                <input type='checkbox' name='term' onChange={changeInput} value={user.term}/> Accept the terms and conditions
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValComp;
