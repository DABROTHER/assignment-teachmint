import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    countriesList: [],
  },
  reducers: {
    setCountriesList: (state, action) => {
      state.countriesList = action.payload;
    },
  },
});

export const { setCountriesList } = postSlice.actions;
export default postSlice.reducer;
