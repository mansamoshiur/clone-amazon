import { configureStore } from '@reduxjs/toolkit'
import anazonReducer from './amazonSlice'

export const store = configureStore({
  reducer: {anazonReducer},
})