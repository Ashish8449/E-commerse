import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    // {
    //   id: -1,
    //   userCredentials: {
    //     userName: "",
    //     password: -1,
    //   },
    //   wishList: [],
    //   cartItems: [],
    // },
  ],
  currentUser: -1,
  isLogIng: false,
};
const localStorageSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      console.log(action.payload);
      if (state.data.includes(action.payload)) {
      }
    },
    signUpUser: (state, action) => {
      const { id, userName, password, email } = action.payload;
      action.payload.id = state.data.length;
      const userAlreadyExist = state.data.find((item, key) => {
        return (
          item.userName === userName &&
          item.password === password &&
          item.email === email
        );
      });

      // check user alert exist or not
      if (userAlreadyExist) {
        alert("User AlReady exist");
        console.log("don");
        return;
      }
      state.data.push(action.payload);

      state.isLogIng = true;
      state.currentUser = state.data.length - 1;
    },
    logOutHandler: (state, action) => {
        state.isLogIng=false;
        state.currentUser= -1;
    },
    addItemToFav: (state, action) => {
      const { currentUser } = state;
      if (currentUser >= 0)
        state.data[currentUser].wishList.push(action.payload);
    },
    addItemToCart: (state, action) => {
      const { currentUser } = state;
      if (currentUser >= 0)
        state.data[currentUser].cartItems.push(action.payload);
    },
  },
});
export const localStorageActions = localStorageSlice.actions;
export default localStorageSlice.reducer;
