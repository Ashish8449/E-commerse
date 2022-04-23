import { configureStore } from "@reduxjs/toolkit";
import localStorageSlice from "./Reducers/localStorage";
import uiSlice from "./Reducers/uiSlice";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    local: localStorageSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});
