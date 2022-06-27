import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart : (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    removeProduct: (state,action)=>{
      state.quantity -= 1;
      if(state.quantity === 0){
        state.products.pop(action.payload);
      }
      else{
       state.products.find(obj=> {
        return obj.desc === action.payload.desc
       }).quantity--
       
      }
      state.total -= action.payload.price;
    },
    addProductCartPage: (state,action)=>{
      state.quantity += 1;
      state.products.find(obj=> {
        return obj.desc === action.payload.desc
       }).quantity++
      state.total += action.payload.price;
    }
  },
});

export const { addProduct,clearCart,removeProduct,addProductCartPage } = cartSlice.actions;
export default cartSlice.reducer;
