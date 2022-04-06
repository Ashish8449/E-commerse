import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {
    rows: [],
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    replaceProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const getProducts = (setLoader) => {
  setLoader(true)
  return async (dispatch) => {
    try {
      const res = await fetch(`https://backendapi.turing.com/products?page=1&limit=100&description_length=1500" -H "accept: application/json`);
      const data = await res.json();
      console.log("uiSlice0", data);
      dispatch(uiActions.replaceProducts(data));
    } catch {
      setLoader(false);
      alert("You got some error");
    } finally {
      setLoader(false);
    }
  };
};
export const getProductsDetials= ()=>{
  return async (dispatch)=>{
    
  }

}
// Action creators are generated for each case reducer function
export const uiActions = counterSlice.actions;

export default counterSlice.reducer;
