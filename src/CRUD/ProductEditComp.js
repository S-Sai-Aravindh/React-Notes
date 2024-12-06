import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductEditComp = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [product, setProducts] = useState({
    id: "",
    pname: "",
    pprice: "",
    pcompany: "",
    pquntity: ""
  });

  const inputChangeHandler = (event) => {
    const { type, name, value } = event.target;
    setProducts({ ...product, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/Products/${id}`, product)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {});
  }, []);

  const addProduct = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8000/Products/${id}`, product)
      .then(() => {
        window.alert("Product Added Successfully");
        nav("/MainDashboard/proddash");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <h1>Product Edit Component</h1>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <form onSubmit={addProduct}>
            <div>
              <label className="form-label">Enter Product name: </label>
              <input
                type="text"
                name="pname"
                onChange={inputChangeHandler}
                value={product.pname}
                className="form-control"
              />

              <label className="form-label">Enter Price: </label>
              <input
                type="text"
                name="pprice"
                onChange={inputChangeHandler}
                value={product.pprice}
                className="form-control"
              />

              <label className="form-label">Enter Company name: </label>
              <input
                type="text"
                name="pcompany"
                onChange={inputChangeHandler}
                value={product.pcompany}
                className="form-control"
              />

              <label className="form-label">Enter Quantity: </label>
              <input
                type="text"
                name="pquntity"
                onChange={inputChangeHandler}
                value={product.pquntity}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default ProductEditComp;
