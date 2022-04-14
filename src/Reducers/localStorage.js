import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  data: [
    {
      userCredentials: {
        userName: "",
        password: -1,
      },
      wishList: [],
      cartItems: [],
    },
  ],

  isLogIng: false,
};

const localStorageSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      if (state.data.includes(action.payload)) {
      }
    },
    setInitalState: (state, action) => {
      localStorage.setItem("initalState", JSON.stringify(state));
    },

    signUpUser: (state, action) => {
      const { id, userName, password, email } = action.payload;
      action.payload.id = state.data.length;
      let userAlreadyExist = false;
      state.data.filter((item, key) => {
        if (
          item.userName === userName &&
          item.password === password &&
          item.email === email
        )
          userAlreadyExist = true;
      });

      // check user alert exist or not
      if (userAlreadyExist.length) {
        alert("User AlReady exist");

        return;
      }
      state.data.push(action.payload);

      state.isLogIng = true;
      state.currentUser = state.data.length - 1;
    },
    signIn: (state, action) => {
      const { userName, password, email } = action.payload;
      state.data.forEach((ele, indx) => {
        if (
          ele.userCredentials.password === password &&
          ele.userCredentials.email === email
        ) {
          state.isLogIng = true;
          state.currentUser = indx;

          return true;
        }
      });
    },
    logOutHandler: (state, action) => {
      state.isLogIng = false;
      state.currentUser = -1;
    },
    addItemToFav: (state, action) => {
      console.log(action.payload)
      const check = state.data[0].wishList.filter(
        (item) => item.product_id === action.payload.product_id
      );
    
      if (check.length===0) state.data[0].wishList.push(action.payload);

    },
    addItemToCart: (state, action) => {
    
      const check = state.data[0].cartItems.filter(
        (item) => item.product_id === action.payload.product_id
      );
    
      if (check.length===0)
      state.data[0].cartItems.push(action.payload);
    },
  },
});
export const localStorageActions = localStorageSlice.actions;
export default localStorageSlice.reducer;
