// store.js
import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './Reducers/counterSlice';


const rootReducer = {
    counter : counterSlice.reducer
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
