import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {
    rows: [],
  },
  copyProduct: {
    rows: [],
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    replaceProducts: (state, action) => {
      state.products = action.payload;
      state.copyProduct = action.payload;
    },
    filterProducts: (state, action) => {
      const val = action.payload;

      state.products.rows = state.copyProduct.rows.filter((item) => {
        const price = (item.price * 80).toFixed(0);
        return val * 500 <= price && val * 500 + 500 >= price;
      });
    },
  },
});

export const getProducts = (setLoader) => {
  setLoader(true);
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://backendapi.turing.com/products?page=1&limit=100&description_length=1500" -H "accept: application/json`
      );
      const data = await res.json();
   
      dispatch(uiActions.replaceProducts(data));
    } catch {
      setLoader(false);
      alert("You got some error");
    } finally {
      setLoader(false);
    }
  };
};
export const getProductsDetials = (setLoader ,productId , setItem) => {
  return async (dispatch) => {
    setLoader(true);
 
    try {
      const res = await fetch(
        `https://backendapi.turing.com/products/${productId}`
      );
      const data = await res.json();
     
      setItem(data);
    } catch {
      setLoader(false);
      alert("You got some error");
    } finally {
      setLoader(false);
    }
  };
};
// Action creators are generated for each case reducer function
export const uiActions = counterSlice.actions;

export default counterSlice.reducer;
