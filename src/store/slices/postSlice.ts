import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    postList: [],
  },
  reducers: {
    setPostList: (state, action) => {
      state.postList = action.payload;
    },
  },
});

export const { setPostList } = postSlice.actions;
export default postSlice.reducer;
