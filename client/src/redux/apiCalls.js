import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
const axios = require('axios')

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log(user);
    const res = await axios.post("http://localhost:3030/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
