import { Link, useLocation,useHistory } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { axios } from "axios";
import { updateProduct } from "../../redux/apiCalls";
import {store} from "../../redux/store"
export default function Product() {
  const location = useLocation();
  const history = useHistory();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const [updated,setUpdated] = useState({})
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const dispatch = useDispatch();

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("http://localhost:3030/api/orders/income?pid=" + productId,{headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}});
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleClick = (e) => {
    e.preventDefault();
    updateProduct(product._id,updated,dispatch)
    history.push("/products")
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create New</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} onChange={(e)=>setUpdated({...product,title: e.target.value})}/>
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} onChange={(e)=>setUpdated({...product,desc: e.target.value})}/>
            <label>Price</label>
            <input type="text" placeholder={product.price} onChange={(e)=>setUpdated({...product,price: e.target.value})}/>
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true" onClick={(e)=>setUpdated({...product,inStock: e.target.value})}>Yes</option>
              <option value="false" onClick={(e)=>setUpdated({...product,inStock: e.target.value})}>No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
            </div>
            <button className="productButton" onClick={handleClick}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
