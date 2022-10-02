import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { RootState, AppThunk } from "../../app/store";
import { item } from "./../../database/items";

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
      state.cartItems = state.cartItems.map((cart) => {
        return cart.id === action.payload.id
          ? { ...cart, quant: cart.quant + 1 }
          : { ...cart };
      });

      console.log(current(state));
    },

    decrementQty: (state, action: PayloadAction<item>) => {
      state.cartItems = state.cartItems.map((cart) => {
        return cart.id === action.payload.id
          ? { ...cart, quant: cart.quant - 1 < 1 ? 1 : cart.quant - 1 }
          : { ...cart };
      });
    },
    addCart: (state, action: PayloadAction<item>) => {
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems = state.cartItems.map((item) => {
          return { ...item, quant: item.quant + 1 };
        });
      }
    },

    deleteCart: (state, action: PayloadAction<item>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },

    calculateItems: (state) => {
      let all: any = [];
      state.cartItems.map((item) => {
        return all.push(item.price * item.quant);
      });

      state.totalPrice = all.reduce((item: any, acc: any) => {
        return item + acc;
      }, 0);
    },
  },
  extraReducers: (builder) => {},
});

export const selectCart = (state: RootState) => state.cart;

export const { incrementQty, decrementQty, addCart, calculateItems, deleteCart } =
  cartSlice.actions;

export default cartSlice.reducer;
