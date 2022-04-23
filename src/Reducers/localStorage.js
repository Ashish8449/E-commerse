import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

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
  user: "",

  idToken: "",
};

const localStorageSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.idToken = action.payload._tokenResponse.idToken;
      state.user = action.payload.user;
    },

    signUpUser: (state, action) => {
      const { password, email } = action.payload.userCredentials;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // console.log(user);
          console.log(userCredential);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorMessage);
        });
    },
    logOutHandler: (state, action) => {
     state.idToken="";
     
    },
    addItemToFav: (state, action) => {
      console.log(action.payload);
      const check = state.data[0].wishList.filter(
        (item) => item.product_id === action.payload.product_id
      );

      if (check.length === 0) state.data[0].wishList.push(action.payload);
      else {
        state.data[0].wishList = state.data[0].wishList.filter(
          (item) => item.product_id !== action.payload.product_id
        );
      }
    },
    addItemToCart: (state, action) => {
      const check = state.data[0].cartItems.filter(
        (item) => item.product_id === action.payload.product_id
      );

      if (check.length === 0) state.data[0].cartItems.push(action.payload);
      else {
        state.data[0].cartItems = state.data[0].cartItems.filter(
          (item) => item.product_id !== action.payload.product_id
        );
      }
    },
  },
});
export const signInFirebase = (userCredentials) => {
  const { password, email } = userCredentials;
  console.log("initalState");
  return async (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const _tokenResponse = userCredential._tokenResponse;
        console.log(user);
        dispatch(
          localStorageActions.userLogin({
            user,
            _tokenResponse,
          })
        );
        // console.log(userCredential);

        // state.idToken=userCredential._tokenResponse.idToken;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  };
};
export const localStorageActions = localStorageSlice.actions;
export default localStorageSlice.reducer;
