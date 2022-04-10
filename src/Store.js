import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './Reducers/uiSlice'

export const store = configureStore({
  reducer: {
      ui: uiSlice,
  },
})