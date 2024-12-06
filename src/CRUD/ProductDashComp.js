import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const ProductDashComp = () => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetchData();
},[]);

    const fetchData=()=>{
        axios.get("http://localhost:8000/Products").then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{})
    }

    const deleteUser=(id)=>{
        console.log(id);
        if(window.confirm("Want to Delete")){
            axios.delete(`http://localhost:8000/Products/${id}`).then(()=>{
                window.alert("Deleted Successfully");
                fetchData();
            }).catch((error)=>{})
        }
        else{
            fetchData();
        }
    }


    return (
    <div>
      <div className='container'>
        <h1>Product Component</h1>
        
        {/* <button >Add</button> */}
        <Link to="/MainDashboard/prodadd" className='btn btn-primary btn-sm mt-2 mb-3' > Add</Link>
            <Outlet/>
        <table className='table table-hover table-bordered table-striped text-center'>
            <thead >
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                  {
                    product.length > 0 && product.map((val,index)=>{
                        return <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.pcompany}</td>
                            <td>{val.pquntity}</td>
                            <td>
                                <Link to={`/MainDashboard/prodedit/${val.id}`} className='btn btn-outline-success btn-sm'><EditIcon></EditIcon></Link> {" | "}
                                <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>deleteUser(val.id)}><DeleteIcon ></DeleteIcon></button>
                            </td>
                        </tr>
                    })
                  }
            </tbody>
        </table>
      </div>
    </div>

  )
}

export default ProductDashComp
