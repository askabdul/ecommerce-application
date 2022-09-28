import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { cart } from './../../database/items'


export interface CounterState {
    cartItems: cart[];
    totalPrice: number;
    totalQuant: number;
  }
  
  const initialState: CounterState = {
    cartItems: [],
    totalPrice: 0,
    totalQuant: 0,
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
        
    }
  },
  extraReducers: (builder) => {

  }
});

export const { incrementQty, decrementQty } = cartSlice.actions;

export default cartSlice.reducer;
