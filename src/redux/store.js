import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './Services/serviceSlice';

const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
});

export default store;
