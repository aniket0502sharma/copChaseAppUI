// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { copsData: [] },
  reducers: {
    loadCops: (state, action) => {
      if(action.payload){
        state.copsData = action.payload
      }
      
    },
   
  },
});


export default counterSlice;



// increment();  --> increase by 1
// increment(5); --> increase by 5

// 1 --> state = 1+5 --> 6
