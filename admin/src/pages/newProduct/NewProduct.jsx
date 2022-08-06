import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault()
    console.log(inputs);
    addProduct(inputs,dispatch);
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="text"
            onChange={(e) => setInputs({...inputs,img: e.target.value})}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={(e) => setInputs({...inputs,title: e.target.value})}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={(e) => setInputs({...inputs,desc: e.target.value})}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={(e) => setInputs({...inputs,price: e.target.value})}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans,skirts" onChange={(e)=> {
            setCat(e.target.value.split(","))
            setInputs({...inputs,categories:cat})
            } } />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock">
            <option value="true" onClick={(e) => setInputs({...inputs,price: e.target.value})}>Yes</option>
            <option value="false" onClick={(e) => setInputs({...inputs,price: e.target.value})}>No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
