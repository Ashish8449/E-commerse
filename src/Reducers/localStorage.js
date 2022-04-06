import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  data: [
    {
      id: -1,
      userCredentials: {
        userName: "",
        password: -1,
      },
      wishList: [],
      cartItems: [],
    },
  ],
  currentUser: -1,
  isLogIng: false,
};
const getInitalState = JSON.parse(localStorage.getItem("initialState"));
// console.log(get)
if (getInitalState) {
  initialState = getInitalState;
}
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
    getInitalState: (state, action) => {
      state = action.payload;
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
      const { currentUser } = state;
      if (currentUser >= 0){
        state.data[currentUser].wishList.push(action.payload);
        console.log(state);
    }
      else {
       

        // if user is log out then if you he want to add wishList 
      }
    },
    addItemToCart: (state, action) => {
      const { currentUser } = state;
      if (currentUser >= 0)
        state.data[currentUser].cartItems.push(action.payload);
      else {
       // if user is log out then if you he want to add to in his cart
      }
    },
  },
});
export const localStorageActions = localStorageSlice.actions;
export default localStorageSlice.reducer;
