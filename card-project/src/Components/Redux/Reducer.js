import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    shiping: 0,
    Tax: 0,
    Total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((e) => e.id == item.id);
      if (isItemExist) {
        state.cartItems.forEach((e) => {
          if (e.id == item.id) e.quantit += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find((e) => e.id == action.payload);
      if (item.quantit > 1) {
        state.cartItems.map((e) => {
          if (e.id == item.id) e.quantit -= 1;
        });
      }
    },
    deleteHandler:(state,action)=>{
        state.cartItems = state.cartItems.filter((e)=>e.id!==action.payload)
    }
  }
);
