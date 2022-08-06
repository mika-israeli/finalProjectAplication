import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import axios from "axios"
import { store } from "./store";

const BASE_URL = "http://localhost:3030/api/"


//----------------User-api--------------------------//

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(BASE_URL+"auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutuser = (dispatch)=> {
  dispatch(logout())
}

export const createUser = async(user) => {
  try { 
    await axios.post("http://localhost:3030/api/auth/register",user)
  } catch (err) {
    console.log(err);
  }
}

export const getUsers = async () => {
  try {
    console.log(store.getState().user.currentUser.accessToken);
    const res = await axios.get(BASE_URL+"users",{headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}})
    return res.data;
  } catch (error) {
    console.log(error);
  }
  
}

export const getUserByID = async (id) => {
  try {
    const res = await axios.get(BASE_URL+"users/find/"+id,{headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}})
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const updateUser = async (userid,obj) => {
  try {
    const res = await axios.put(BASE_URL+"users/"+userid,obj,{headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}})
    return res.data
  } catch (error) {
    console.log(error);
  }
}

export const deleteUser = async (userid)=> {
  try {
    await axios.delete(BASE_URL+"users/"+userid,{headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}})
  } catch (error) {
    console.log(error);
  }
}

//----------------Products-api-----------------//

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get(BASE_URL+"products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await axios.delete(BASE_URL+`products/${id}`,{headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}});
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    axios.put(BASE_URL+"products/"+id,product,{headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}});
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await axios.post(+`products`, product,{headers: {token: `Bearer ${store.getState().user.currentUser.accessToken}`}});
    console.log(res.data);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
