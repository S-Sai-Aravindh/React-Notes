import { useEffect, useState } from "react";

const UseeffectHooksComp = ()=>{
    const [age,setAge] = useState(10);
    const [ sal,setsal] = useState(1000);
    // case 1 : no dependecies given 
    // useEffect(()=>{
    //     setAge(age+1)
    // })

    // case 2  :when we pass dependency value as blank array 
    // useEffect (()=>{
    //     setAge(age+1)
    // },[])

    // case 3 : when we pass dependency 
    useEffect (()=>{
        setAge(age+1)
    },[sal])


    return(
        <div>
            <h1>UseEffect compo</h1>
            <p>Age : {age}</p>
            <p>Salary : {sal}</p>
            <button type="button" className="btn btn-primary" onClick={()=>setsal(sal+1000)}>Increment Salary</button>
        </div>
    );
}

export default UseeffectHooksComp;