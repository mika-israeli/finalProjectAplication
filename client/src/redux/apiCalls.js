import { loginFailure, loginStart, loginSuccess,logoutfromuser } from "./userRedux";
import { clearCart } from "./cartRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const clearCartData = (dispatch) => {
  dispatch(clearCart())
};


export const logout = (dispatch) =>{
  dispatch(logoutfromuser());
}

//create cart

//add product to cart

//remove product from cart

//get cart data


