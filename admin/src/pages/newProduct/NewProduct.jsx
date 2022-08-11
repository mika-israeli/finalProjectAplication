import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
=======
import {useHistory} from "react-router-dom"
>>>>>>> saarbranchv4

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
<<<<<<< HEAD
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    addProduct(inputs, dispatch);
    history.push("/products");
  };
=======
  const history = useHistory()
  
  const handleClick = (e) => {
    e.preventDefault()
    addProduct(inputs,dispatch);
    history.push("/products")
  }
>>>>>>> saarbranchv4

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="text"
<<<<<<< HEAD
            onChange={(e) => setInputs({ ...inputs, img: e.target.value })}
=======
            onChange={(e) => setInputs({...inputs,img: e.target.value})}
>>>>>>> saarbranchv4
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
<<<<<<< HEAD
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
=======
            onChange={(e) => setInputs({...inputs,title: e.target.value})}
>>>>>>> saarbranchv4
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
<<<<<<< HEAD
            onChange={(e) => setInputs({ ...inputs, desc: e.target.value })}
=======
            onChange={(e) => setInputs({...inputs,desc: e.target.value})}
>>>>>>> saarbranchv4
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
<<<<<<< HEAD
            onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
          />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input
            name="size"
            type="text"
            placeholder="S,XS..."
            onChange={(e) => setInputs({ ...inputs, size: e.target.value })}
          />
        </div>
        <div className="addProductItem">
          <label>color</label>
          <input
            name="color"
            type="text"
            placeholder="white,yellow..."
            onChange={(e) => setInputs({ ...inputs, color: e.target.value })}
=======
            onChange={(e) => setInputs({...inputs,price: e.target.value})}
>>>>>>> saarbranchv4
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
<<<<<<< HEAD
          <input
            type="text"
            placeholder="jeans,skirts"
            onChange={(e) => {
              setCat(e.target.value.split(","));
              setInputs({ ...inputs, categories: cat });
            }}
          />
=======
          <input type="text" placeholder="jeans,skirts" onChange={(e)=> {
            setCat(e.target.value.split(","))
            setInputs({...inputs,categories:cat})
            } } />
>>>>>>> saarbranchv4
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock">
<<<<<<< HEAD
            <option
              value="true"
              onClick={(e) => setInputs({ ...inputs, price: e.target.value })}
            >
              Yes
            </option>
            <option
              value="false"
              onClick={(e) => setInputs({ ...inputs, price: e.target.value })}
            >
              No
            </option>
=======
            <option value="true" onClick={(e) => setInputs({...inputs,price: e.target.value})}>Yes</option>
            <option value="false" onClick={(e) => setInputs({...inputs,price: e.target.value})}>No</option>
>>>>>>> saarbranchv4
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
