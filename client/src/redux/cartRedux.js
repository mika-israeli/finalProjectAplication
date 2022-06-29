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
      
      if(state.products.find(obj=> {// will concat objects in products[] instead of pushing few copyies from the same instances !
        return obj.desc === action.payload.desc
      }))
      {
        state.products.find(obj=> {
          return obj.desc === action.payload.desc
        }).quantity += action.payload.quantity;
        state.quantity += action.payload.quantity;
        console.log(state.quantity);
        state.total += action.payload.price * action.payload.quantity
      }
      else {//else if object is not in products[] will push him inside
        state.quantity += action.payload.quantity;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    clearCart : (state) => {// clearing cart by initialize 
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    removeProduct: (state,action)=>{
      state.quantity -= 1;
      if( action.payload.quantity === 1){ //will remove relevant product from products[] if obj.quantity is lesser than 1
        console.log(action.payload.quantity);
        state.products = state.products.filter((obj=> {
          return obj._id !== action.payload._id
         }))
      }
      else{
       state.products.filter(obj=> { // else will less obj.quantity by 1
        return obj.desc === action.payload.desc
       }).forEach((item)=>item.quantity--)
       
       
      }
      state.total -= action.payload.price;
    },
    addProductCartPage: (state,action)=>{
      state.quantity += 1;
      state.products.filter(obj=> {
        return obj.desc === action.payload.desc
       }).forEach((item)=>item.quantity++)
      state.total += action.payload.price;
    }
  },
});

export const { addProduct,clearCart,removeProduct,addProductCartPage } = cartSlice.actions;
export default cartSlice.reducer;
