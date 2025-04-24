import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showObject: {
    showId: '',
    showType: '',
  },
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setShow: (state, action) => {
      state.showObject = action.payload;
    },
  },
});

export default showSlice.reducer;
export const { setShow } = showSlice.actions;
