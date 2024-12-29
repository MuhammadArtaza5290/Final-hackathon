import { createSlice} from '@reduxjs/toolkit';

// Async Thunks

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
      events: [],
      status: 'idle',
    },
    reducers: {},
    
    
  });
  
  export default eventsSlice.reducer;