import { loginFailure, loginStart, loginSuccess,logoutfromuser} from "./userRedux";
import { clearCart, loadCart} from "./cartRedux";
import axios from "axios";
import { store } from "./store";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3030/api/auth/login", user);
    dispatch(loginSuccess(res.data)); 
    const cart = await getCart(); //getting user cart from DB
    if(cart.products) dispatch(loadCart(cart.products)); //if there are products, will update state and show them 

  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async(dispatch,products) =>{
  try {
    const res = await getCart(); //get user's cart data
    
    if(!res){//if there is no cart, save to DB
      console.log("inside if logout ! ");
      await saveCarttoDB(products);
      dispatch(clearCart())//free local storage memory
      dispatch(logoutfromuser());
    }
    else{//else update in DB
      await updateCart(products);
      dispatch(clearCart())
      dispatch(logoutfromuser());
    }
  } catch (error) {
    console.log(error);
  }
}


//------------------------------------Cart-api------------------------------------------------//

export const clearCartData = (dispatch) => {
  dispatch(clearCart())
};

//save cart
export const saveCarttoDB = async(products)=> {
  let temp = []
  products.forEach((item)=>{
    temp.push({//push to a temp array the relevant elements to save in DB
      productId: item._id,
      price: item.price,
      quantity: item.quantity
    })
  })
  try {
    await axios.post("http://localhost:3030/api/carts",
    {
      userId: store.getState().user.currentUser._id,
      products: temp
    },{headers: {token: `Bearer ${store.getState().user.token}`}})
    
  } catch (error) {
    console.log(error);
  }
}

//update cart
export const updateCart = async(products) => {
  let temp = []
  products.forEach((item)=>{
    temp.push({
      productId: item._id,
      price: item.price,
      quantity: item.quantity
    })
    
  })
  try {
    await axios.put("http://localhost:3030/api/carts/"+store.getState().user.currentUser._id,
    {
      userId: store.getState().user.currentUser._id,
      products: temp
    },{headers: {token: `Bearer ${store.getState().user.token}`}})
    
  } catch (error) {
    console.log(error);
  }
}


//get cart data
export const getCart = async()=> {
  try {
    const res = await axios.get("http://localhost:3030/api/carts/find/"+store.getState().user.currentUser._id,{headers: {token: `Bearer ${store.getState().user.token}`}})
    if(res.data){
      return res.data;
    }
    
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}




