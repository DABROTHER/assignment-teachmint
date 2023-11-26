import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    clearUserList: (state) => {
      state.userList = [];
    },
  },
});

export const { setUserList } = userSlice.actions;
export default userSlice.reducer;
