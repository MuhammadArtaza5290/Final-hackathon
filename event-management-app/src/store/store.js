import { configureStore } from '@reduxjs/toolkit'
import eventReducer from  '../store/slices/eventSlice'
export const store = configureStore({
  reducer: {
    event: eventReducer,  // Add your slice reducers here.  // Example: user: userReducer,
  },
})