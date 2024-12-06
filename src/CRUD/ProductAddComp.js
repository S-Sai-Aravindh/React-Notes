import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductAddComp = () => {
    const nav = useNavigate();
    const [products,setProducts] = useState({
        pname : "",
        pprice : "",
        pcompany : "",
        pquntity : ""
    });

    const inputChangeHandler = (event) =>{
        const {type,name,value} = event.target;
        setProducts({...products,[name]:value});
    }

    const addProduct = (event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8000/Products`,products).then(()=>{
            window.alert("Product Added Successfully");
            nav('/MainDashboard/proddash');
        }).catch((error)=>{})
    }

  return (
    <div>
      <h2>Product Add</h2>

      <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
                <form onSubmit={addProduct}>
                    <div>
                        <label className='form-label'>Enter Product name: </label>
                        <input type='text' name="pname" onChange={inputChangeHandler} value={products.pname} className='form-control'/>
                        
                        <label className='form-label'>Enter Price: </label>
                        <input type='text' name="pprice" onChange={inputChangeHandler} value={products.pprice} className='form-control'/>
                        
                        <label className='form-label'>Enter Company name: </label>
                        <input type='text' name="pcompany" onChange={inputChangeHandler} value={products.pcompany} className='form-control'/>
                        
                        <label className='form-label'>Enter Quantity: </label>
                        <input type='text' name="pquntity" onChange={inputChangeHandler} value={products.pquntity} className='form-control'/>
                    </div>
                    <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                </form>
            </div>
            <div className='col-sm-3'></div>
      </div>
      
    </div>
  )
}

export default ProductAddComp
