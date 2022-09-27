import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";


export interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
  }
  
  const initialState: CounterState = {
    value: 0,
    status: 'idle',
  };


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
});

export default cartSlice.reducer;
