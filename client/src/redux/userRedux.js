import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      console.log("login start !");
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutfromuser: (state)=> {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure,logoutfromuser } = userSlice.actions;
export default userSlice.reducer;
