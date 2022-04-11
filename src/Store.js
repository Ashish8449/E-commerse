import { configureStore } from '@reduxjs/toolkit'
import localStorageSlice from './Reducers/localStorage'
import uiSlice from './Reducers/uiSlice'

export const store = configureStore({
  reducer: {
      ui: uiSlice,
      local:localStorageSlice
  },
})