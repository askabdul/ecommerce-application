import { createAsyncThunk, createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import {item } from "./../../database/items";

export interface CounterState {
  cartItems: item[];
  totalPrice: number;
  totalQuant: number;
}

const initialState: CounterState = {
  cartItems: [],
  totalPrice: 0,
  totalQuant: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQty: (state, action: PayloadAction<item>) => {

        console.log(action);
        
       state.cartItems = state.cartItems.map((cart) => {
            return cart.id === action.payload.id ? { ...cart, quant: cart.quant + 1} : {...cart}
        });

        console.log(current(state))
    },

    decrementQty: (state, action: PayloadAction<item>) => {
        state.cartItems = state.cartItems.map((cart) => {
            return cart.id === action.payload.id ? { ...cart, quant: cart.quant - 1 < 1 ? 1 : cart.quant -1 } : {...cart}
        });
    },
    addCart: (state, action: PayloadAction<item>) => {
      state.cartItems.push(action.payload);
    },


  },
  extraReducers: (builder) => {},
});

export const selectCart = (state: RootState) => state.cart;

export const { incrementQty, decrementQty, addCart } = cartSlice.actions;

export default cartSlice.reducer;
