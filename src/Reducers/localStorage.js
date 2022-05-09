import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { onValue, ref } from "firebase/database";

import { auth, db } from "../Firebase/firebase";

let initialState = {
  wishList: [],
  cartItems: [],

  user: "",

  idToken: "",
};

const localStorageSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload.user.uid;
    },

    replaceData: (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.wishList = action.payload.wishList;
      state.user = action.payload.user;
    },

    logOutHandler: (state, action) => {
      state.user = "";
      state.idToken = "";
      state.cartItems = [];
      state.wishList = [];
    },
    addItemToFav: (state, action) => {
      const check = state.wishList.filter(
        (item) => item.product_id === action.payload.product_id
      );

      if (check.length === 0) state.wishList.push(action.payload);
      else {
        state.wishList = state.wishList.filter(
          (item) => item.product_id !== action.payload.product_id
        );
      }
    },
    addItemToCart: (state, action) => {
      const check = state.cartItems.filter(
        (item) => item.product_id === action.payload.product_id
      );

      if (check.length === 0) state.cartItems.push(action.payload);
      else {
        state.cartItems = state.cartItems.filter(
          (item) => item.product_id !== action.payload.product_id
        );
      }
    },
    removeHandler: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload.product_id
      );
    },
  },
});

export const signInFirebase = (userCredentials) => {
  const { password, email } = userCredentials;

  return async (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const _tokenResponse = userCredential._tokenResponse;

        const starCountRef = ref(db, "users/" + user.uid + "/data");
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();

          dispatch(localStorageActions.replaceData(data));
          dispatch(
            localStorageActions.userLogin({
              user,
              _tokenResponse,
            })
          );
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });
  };
};
export const signUpUser = (items) => {
  const { password, email } = items;
  return async (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        const _tokenResponse = userCredential._tokenResponse;

        dispatch(
          localStorageActions.userLogin({
            user,
            _tokenResponse,
          })
        );

        // dispatch(localStorageActions.sendData());

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
