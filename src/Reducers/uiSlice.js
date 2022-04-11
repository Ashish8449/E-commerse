import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: [],
  cartItems: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   
  },
});

// Action creators are generated for each case reducer function
export const uiActions = counterSlice.actions;

export default counterSlice.reducer;
