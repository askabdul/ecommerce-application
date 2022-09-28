import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { cart, AllCarts, item } from './../../database/items'


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
    incrementQty: (state) => {
        state.totalQuant = state.totalQuant + 1
    },

    decrementQty: state => {
        if(state.totalQuant - 1 < 1) {
            state.totalQuant = 1
        } else {

            state.totalQuant = state.totalQuant - 1
        }
        
    },
    addCart: (state, action: PayloadAction<item>) => {
        state.cartItems.push(action.payload)
    }
  },
  extraReducers: (builder) => {

  }
});

export const selectCart = (state: RootState) => state.cart;

export const { incrementQty, decrementQty, addCart } = cartSlice.actions;

export default cartSlice.reducer;
